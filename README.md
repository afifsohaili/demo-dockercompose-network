## Usage

1. Git clone this repo.
2. Run `docker-compose up --build`

#### Notes:

If you're wondering why I have a postgres image when my backend is using memory as database, it's because the docker-compose setup is ported over from my real project with postgres db.  I only switched the code for `frontend` and `backend` to a simpler project.
