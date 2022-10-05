# Getting started

## Requirements

Please ensure that you have;

- .Net core 5.0 Framework.
- dotnet ef CLI (the latest version that works with .Net core 5.0 is 6.0.5, I believe). This can be installed with the command;
  `$ dotnet tool install --global dotnet-ef --version 6.0.5`
- Postgresql. I developed this with postgresql 14 and have a superuser set up on my postgres instance with username: postgres, password: postgres.
- Node 14.

## Build

- Clone repository.
- Navigate to the `DotnetReactMicroblog.Api` directory and build either in VS or by running `$ dotnet build` in the CLI.

## Db-up

You should be able to run the command `$ dotnet ef database update` to create the required database in postgres using the existing migrations in the project.
If this doesn't work then please delete the existing migrations folder and run `$ dotnet ef migrations add InitialCreate` followed by `$ dotnet ef database update`.

## Running the Api

From the directory `DotnetReactMicroblog.Api` run `$ dotnet run` from the CLI or run the project in VS.
The Api should run on `https://localhost:5001/` and can be checked by visiting `https://localhost:5001/keepalive` in the browser.

## Installing the UI

Navigate to `Dotnet-react-microblog-ui` directory and run `$ npm i` to install packages.

## Running the UI

Run `$ npm start`. The UI will run on `localhost:3000`.
