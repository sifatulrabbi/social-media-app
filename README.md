# Prometheus

Social media platform

The application is divided into two pieces **Front end** and **Back end**.

## Back end

The back-end is build with

- **Node.js**: JavaScript runtime which can run JavaScript on computers.
- **Express.js**: Node.js framework for building REST APIs.
- **MySQL**: SQL database system.
- **body-parser**: Parses the request body or the encoded query params and converts them in to javascript objects
- **cookie-parser**: Parses the cookie into javascript objects
- **bcrypt**: Creates hashes with random salt (used for hashing and validating passwords)
- **cors**: simple library for managing cross origin requests (e.g. sending request to localhost:3000 from localhost:5000)
- **debug**: just to show debugging information (didn't used that much it was previously installed by the express-generator)
- **dotenv**: for loading env (environment variables) from various env files
- **lodash**: very commonly used library. in this case I have used this to omit object's properties
- **morgan**: logger library that shows beautify http request logs
- **multer**: for managing file uploads (removes the need of manually converting files in to stream bytes)
- **mysql2**: javascript library for doing mysql queries from within javascript applications
- **sequelize**: SQL Object relational mapping (ORM) for javascript, this makes sure to remove the need for writing SQL

### Database Tables

**User**

- id: primary key, auto increments
- username: unique name of a user
- email: user's unique email
- salt: salt for hashing the password
- hash: generated digest from password
- createdAt: time of creation
- profileId: reference of the profile

**Profile**

- id: primary key, auto increments
- fullname: user's full name
- education:
- bio:
- specialization:
- address:
- createdAt: time of creation

**Post**

- id:
- body: this is text associated with the post
- postedBy: fullname of the user
- profileAvatar: media id if the user's avatar
- createdAt: time of creation
- profileId: reference of the user's profile

**Organization**

- id:
- name: name of the org
- allowedProfiles: profiles that are allowed in this organization usually it will match the allowed list with the user's specialization. if it matches the allowed list then the join request will be approved
- ownerId: id of the organization owner
- createdAt: time of creation

**Media**

- id:
- source: name of the media file
- mimeType: indicating the type of the media (video, image, audio, etc)
- createdAt: time of creation
- postId: reference of the post associated with this media
- profileId: reference of the profile associated with this media

**Like**

- id:
- profileId: reference of the user's profile
- postId: reference of the post
- createdAt: time of creation

**Share**

- id:
- postId: reference of the post that is shared
- profileId: reference of the user's profile who shared the post
- createdAt: time of creation

**Like**

- id:
- postId: reference of the post that is shared
- profileId: reference of the user's profile who shared the post
- createdAt: time of creation

**GroupMember**

- createdAt: time of creation

**Group**

- createdAt: time of creation

**Connection**

- id:
- connectedWith: reference of the connected user's profile
- profileId: reference of the profile that has this connection
- createdAt: time of creation

**Comments**

- postId: reference of the post that is shared
- profileId: reference of the user's profile who shared the post
- body: text of the comment
- createdAt: time of creation

## Methods

I will write down associated HTTP verbs too.

GET users by email => filters a user with the given id/email and returns it (getAUser)

POST users => creates a user (createUser)

GET profiles => all profile (getProfiles)

GET profiles by id => single profile filtered by the id (getProfileById)

POST profile => creates a profile

PUT profile by id => updates a profile

GET posts => get many/all the posts

GET post by id => get a single post

POST post => creates a post

PUT post => updates a post

DELETE post by id => removes a post

GET post comments => get all the comments of a post

GET post likes => get all the likes of a post

GET post shares => get all the shares of a post

POST comment => creates a comment

POST like => creates a like

POST share => creates a share

POST media => saves a media

GET media => gets a media

PUT media with postId => links a media with a post

PUT media with profileId => links a media with a profile

POST connection => creates a connection between two users

GET connections by profile id => get all the connections of a profile

GET Organizations => get a list of organizations

GET organization by id => get an organization

POST organization => creates an organization

PUT organization with profileId => user joins a organization

## Front-end

### Directory structure

./
/build/: build files ignore this dir
/node_modules/: dependencies files ignore this dir

/public/
-----/favicon.ico: favicon for the tab title bar
-----/index.html: main html page. js will be compiled and added to this file
-----/manifest.json: browser manifest file
-----/robots.txt: commands for the google crawlers

/src/
----/components
----/contexts
----/hooks
----/images
----/App.jsx
----/index.css
----/index.jsx

/.gitignore
/.package.json
/postcss.config.js: PostCSS config file
/README.md
/tailwind.config.js: TailwindCSS config file
