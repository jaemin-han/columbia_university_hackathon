BEGIN;

DROP TABLE IF EXISTS location;

CREATE TABLE location (
  id SERIAL PRIMARY KEY,
  appName VARCHAR NOT NULL,
  host VARCHAR NOT NULL,
  latitude FLOAT(10) NOT NULL,
  longitude FLOAT(10) NOT NULL,
  locTime TIMESTAMP DEFAULT current_timestamp
);

COPY location (appName, host, latitude, longitude, locTime)
FROM '/Users/jaeminhan/Desktop/Hackathon/columbia_university_hackathon/db/location.csv' with (format csv, delimiter ',');

COMMIT;
