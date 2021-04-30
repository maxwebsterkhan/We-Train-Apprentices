import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { Results, Users } from "./database/schema";
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const dbConnection =
  process.env["DB_CONNECTION"] || "mongodb://localhost:27017/database";

mongoose.connect(dbConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Open DB connection

var db = mongoose.connection;
db.on("open", () => {
  console.log("Connected to mongoDB");
});
db.on("error", (error) => {
  console.log(error);
});

// ROUTES

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

app.use(function (req, res, next) {
  if (req.url.includes("/login") || req.url.includes("/user")) {
    next();
    return;
  }
  const token = req.headers["authorization"];
  if (!token) {
    res.status(401).send("No token: Not authenticated");
    return;
  }
  const query = Users.where({ token });
  query.findOne((err: any, user: any) => {
    if (err) {
      res.status(401).send("Error: Not authenticated");
      return;
    } else {
      if (user) {
        next();
        return;
      } else {
        res.status(401).send("Not found: Not authenticated");
        return;
      }
    }
  });
});

// add Result

app.post("/results", (req: Request, res: Response) => {
  let newResult = new Results({ ...req.body });

  newResult.save((err: Error) => {
    if (err) {
      console.log(err);
      res.send("Error while adding Result");
    } else {
      console.log(newResult);
      res.send("Result added");
    }
  });
});

// FETCH RESULTS

app.get("/results", async (req: Request, res: Response) => {
  try {
    const results = await Results.find().limit(5).sort({ $natural: -1 });
    console.log("these are the", { results });
    res.send(results);
  } catch (err) {
    console.log("error is", { err });
    res.status(500).send("Error: Results not found");
  }
});

// User log in

app.post("/login", (req: Request, res: Response) => {
  if (!req.body.email || !req.body.password) {
    res.status(401).send("Not authenticated");
    return;
  }
  const query = Users.where({
    email: req.body.email,
    password: req.body.password,
  });

  //  Authentication

  query.findOne((err: any, user: any) => {
    if (err) {
      res.status(401).send("Error: Not authenticated");
    } else {
      const token = uuidv4();
      if (user) {
        user.token = token;
        user.save();
        res.status(200).send(token);
      } else {
        res.status(401).send("Not found: Not authenticated");
      }
    }
  });
});

// Create user

app.post("/user", (req: Request, res: Response) => {
  let newUser = new Users({ ...req.body });

  newUser.save((err: Error) => {
    if (err) {
      console.log(err);
      res.send("Error while adding user");
    } else {
      console.log(newUser);
      res.send("User added");
    }
  });
});

// Port runs on...
app.listen(3002, () => {
  console.log("Server started on port 3002");
});
