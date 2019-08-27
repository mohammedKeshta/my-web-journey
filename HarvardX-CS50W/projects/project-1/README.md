
- [App](https://dashboard.heroku.com/apps/read-guid-css50w) `read-guid-css50w`
- [DB](https://data.heroku.com/datastores/0eaa8fcc-aa05-4b3c-9a26-fdd2fe554361#)
- CS50w [adminer](https://adminer.cs50.net/)

# HEROKU
- Host `ec2-50-19-222-129.compute-1.amazonaws.com`
- Database `d4l43kmjecgnd1`
- User `bzdidxnrecosgl`
- Port `5432`
- Password `78034340b6d0f05e83d9c03d4cdb75d4b57eb966a916987206d49d0074eb79d0`
- URI `postgres://bzdidxnrecosgl:78034340b6d0f05e83d9c03d4cdb75d4b57eb966a916987206d49d0074eb79d0@ec2-50-19-222-129.compute-1.amazonaws.com:5432/d4l43kmjecgnd1`
- Heroku CLI `heroku pg:psql postgresql-tetrahedral-36991 --app read-guid-css50w`

# GOOGLE READS 
- key: DcVBm8O4Dv1Ku246tQqg
- secret: W23mwhqc6PMCKjunpm7QO4CQ0ognBLd2XnRYWQGYa60
- Goodreads API, documented [here](https://www.goodreads.com/api/index).



os.environ["DATABASE_URL"] = str(
    "postgres://bzdidxnrecosgl:78034340b6d0f05e83d9c03d4cdb75d4b57eb966a916987206d49d0074eb79d0@ec2-50-19-222-129.compute-1.amazonaws.com:5432/d4l43kmjecgnd1")

os.environ["GOOGLE_API_KEY"] = str("DcVBm8O4Dv1Ku246tQqg")




HarvardX: CS50W -"Project 1: Books" screencast
------------------------------------------------------------------------------------------------------
Uploaded as a requirement for the course.Short screencast
in which i demonstrate my app’s functionality and walk viewers through the code.
------------------------------------------------------------------------------------------------
Technologies used in the Project:Flask,Python,Jinja2,HTML/CSS,Bootstrap,PostgreSQL,GitHub