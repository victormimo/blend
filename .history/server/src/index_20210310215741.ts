import cors from "cors";
import express, { Application } from "express";
import path from "path";
import { jwt } from "twilio";
const { AccessToken } = jwt;
import config from "./config";
const { VideoGrant } = AccessToken;
const app = express();
require("dotenv").config();
app.use(express.static(path.join(__dirname, "build")));

const {
  MAX_ALLOWED_SESSION_DURATION,
  twilioAccountSid,
  twilioApiKeySID,
  twilioApiKeySecret,
} = config;

app.get("/token", cors(), (req: Request, res: Response) => {
  const { identity, roomName } = req.query;
  console.log(`identity ${identity}, roomName ${roomName}`);
  const token = new AccessToken(
    twilioAccountSid,
    twilioApiKeySID,
    twilioApiKeySecret,
    {
      ttl: MAX_ALLOWED_SESSION_DURATION,
    }
  );

  token.identity = identity;
  const videoGrant = new VideoGrant({ room: roomName });
  token.addGrant(videoGrant);

  const tokenJwt = token.toJwt();
  const dataToSend = { tokenString: tokenJwt };

  res.send(dataToSend);
  console.log(`issued token for ${identity} in room ${roomName}`);
});

app.listen(8081, () => console.log("token server running on 8081"));
