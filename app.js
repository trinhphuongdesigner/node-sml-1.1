const express = require("express");
const ejs = require("ejs");
const ejsMate = require("ejs-mate");

const port = 3000;

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.engine("ejs", ejsMate);
app.use("/public", express.static("./public"));

app.get("/", (req, res) => {
  const postList = [
    {
      title: "Man must explore, and this is exploration at its greatest",
      description: "Problems look mighty small from 150 miles up",
      createBy: "Start Bootstrap",
      createAt: "on September 24, 2019",
    },
    {
      title:
        "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
      description: "",
      createBy: "Start Bootstrap",
      createAt: "on September 18, 2019",
    },
    {
      title: "Science has not yet mastered prophecy",
      description:
        "We predict too much for the next year and yet far too little for the next ten.",
      createBy: "Start Bootstrap",
      createAt: "on August 24, 2019",
    },
    {
      title: "Failure is not an option",
      description:
        "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
      createBy: "Start Bootstrap",
      createAt: "on July 8, 2019",
    },
  ];
  res.render("client/page/homePage", {
    postList,
  });
});
app.get("/post", (req, res) => {
  const post = {
    title: "Man must explore, and this is exploration at its greatest",
    content: `<p>
        Never in all their history have men been able truly to conceive of the
        world as one: a single sphere, a globe, having the qualities of a globe,
        a round earth in which all the directions eventually meet, in which
        there is no center because every point, or none, is center — an equal
        earth which all men occupy as equals. The airman's earth, if free men
        make it, will be truly round: a globe in practice, not in theory.
      </p>

      <p>
        Science cuts two ways, of course; its products can be used for both good
        and evil. But there's no turning back from science. The early warnings
        about technological dangers also come from science.
      </p>

      <p>
        What was most significant about the lunar voyage was not that man set
        foot on the Moon but that they set eye on the earth.
      </p>

      <p>
        A Chinese tale tells of some men sent to harm a young girl who, upon
        seeing her beauty, become her protectors rather than her violators.
        That's how I felt seeing the Earth for the first time. I could not help
        but love and cherish her.
      </p>

      <p>
        For those who have seen the Earth from space, and for the hundreds and
        perhaps thousands more who will, the experience most certainly changes
        your perspective. The things that we share in our world are far more
        valuable than those which divide us.
      </p>

      <h2 class="section-heading">The Final Frontier</h2>

      <p>
        There can be no thought of finishing for ‘aiming for the stars.’ Both
        figuratively and literally, it is a task to occupy the generations. And
        no matter how much progress one makes, there is always the thrill of
        just beginning.
      </p>

      <p>
        There can be no thought of finishing for ‘aiming for the stars.’ Both
        figuratively and literally, it is a task to occupy the generations. And
        no matter how much progress one makes, there is always the thrill of
        just beginning.
      </p>

      <blockquote class="blockquote">
        The dreams of yesterday are the hopes of today and the reality of
        tomorrow. Science has not yet mastered prophecy. We predict too much for
        the next year and yet far too little for the next ten.
      </blockquote>

      <p>
        Spaceflights cannot be stopped. This is not the work of any one man or
        even a group of men. It is a historical process which mankind is
        carrying out in accordance with the natural laws of human development.
      </p>

      <h2 class="section-heading">Reaching for the Stars</h2>

      <p>
        As we got further and further away, it [the Earth] diminished in size.
        Finally it shrank to the size of a marble, the most beautiful you can
        imagine. That beautiful, warm, living object looked so fragile, so
        delicate, that if you touched it with a finger it would crumble and fall
        apart. Seeing this has to change a man.
      </p>

      <a href="#">
        <img class="img-fluid" src="img/post-sample-image.jpg" alt="" />
      </a>
      <span class="caption text-muted"
        >To go places and do things that have never been done before – that’s
        what living is all about.</span
      >

      <p>
        Space, the final frontier. These are the voyages of the Starship
        Enterprise. Its five-year mission: to explore strange new worlds, to
        seek out new life and new civilizations, to boldly go where no man has
        gone before.
      </p>

      <p>
        As I stand out here in the wonders of the unknown at Hadley, I sort of
        realize there’s a fundamental truth to our nature, Man must explore, and
        this is exploration at its greatest.
      </p>`,
    description: "Problems look mighty small from 150 miles up",
    author: "Space Ipsum",
    photoBy: `"NASA on The Commons"`,
  };
  res.render("client/page/post", {
    post,
  });
});
app.get("/contact", (req, res) => {
  const contact = `<p>
        Want to get in touch? Fill out the form below to send me a message and I
        will get back to you as soon as possible!
      </p>
      <form name="sentMessage" id="contactForm" novalidate>
        <div class="control-group">
          <div class="form-group floating-label-form-group controls">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              id="name"
              required
              data-validation-required-message="Please enter your name."
            />
            <p class="help-block text-danger"></p>
          </div>
        </div>
        <div class="control-group">
          <div class="form-group floating-label-form-group controls">
            <label>Email Address</label>
            <input
              type="email"
              class="form-control"
              placeholder="Email Address"
              id="email"
              required
              data-validation-required-message="Please enter your email address."
            />
            <p class="help-block text-danger"></p>
          </div>
        </div>
        <div class="control-group">
          <div class="form-group col-xs-12 floating-label-form-group controls">
            <label>Phone Number</label>
            <input
              type="tel"
              class="form-control"
              placeholder="Phone Number"
              id="phone"
              required
              data-validation-required-message="Please enter your phone number."
            />
            <p class="help-block text-danger"></p>
          </div>
        </div>
        <div class="control-group">
          <div class="form-group floating-label-form-group controls">
            <label>Message</label>
            <textarea
              rows="5"
              class="form-control"
              placeholder="Message"
              id="message"
              required
              data-validation-required-message="Please enter a message."
            ></textarea>
            <p class="help-block text-danger"></p>
          </div>
        </div>
        <br />
        <div id="success"></div>
        <button type="submit" class="btn btn-primary" id="sendMessageButton">
          Send
        </button>
      </form>`;
  res.render("client/page/contact", {
    contact,
  });
});
app.get("/about", (req, res) => {
  const about = `<p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum
        ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta
        odio, adipisci quas excepturi maxime quae totam ducimus consectetur?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
        praesentium recusandae illo eaque architecto error, repellendus iusto
        reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in
        officia voluptas voluptatibus, minus!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
        consequuntur magnam, excepturi aliquid ex itaque esse est vero natus
        quae optio aperiam soluta voluptatibus corporis atque iste neque sit
        tempora!
      </p>`;
  res.render("client/page/about", {
    about,
  });
});

app.listen(port);
