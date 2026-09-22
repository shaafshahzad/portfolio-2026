import type { Metadata } from "next";
import Link from "next/link";
import ThemeSelect from "../../theme-select";
import ImageGallery, {
  type GalleryImage,
} from "../fresh-first/image-gallery";

export const metadata: Metadata = {
  title: "Shaaf Shahzad · Shaaf Shahzad",
  description:
    "A short introduction to Shaaf Shahzad, his interests, and the things he cares about.",
};

const footballPhotos: GalleryImage[] = [
  {
    src: "/blog/shaaf-shahzad/arsenal-jersey.jpeg",
    alt: "Shaaf's red and white Arsenal home jersey laid out on a bed.",
    width: 4284,
    height: 5712,
  },
  {
    src: "/blog/shaaf-shahzad/man-city-arsenal-ticket.jpg",
    alt: "Shaaf's ticket for Manchester City versus Arsenal on his birthday.",
    width: 1178,
    height: 1795,
  },
];

const watchPhotos: GalleryImage[] = [
  {
    src: "/blog/shaaf-shahzad/watch-collection.jpeg",
    alt: "Shaaf's growing watch collection in a six-slot watch box.",
    width: 4032,
    height: 3024,
  },
  {
    src: "/blog/shaaf-shahzad/seiko-presage.jpeg",
    alt: "A silver-dial Seiko Presage automatic watch on Shaaf's wrist.",
    width: 3024,
    height: 4032,
  },
  {
    src: "/blog/shaaf-shahzad/red-seiko.jpeg",
    alt: "A red Seiko Prospex automatic dive watch on Shaaf's wrist.",
    width: 3024,
    height: 4032,
  },
  {
    src: "/blog/shaaf-shahzad/tissot-on-the-water.jpeg",
    alt: "A blue-dial Tissot watch on Shaaf's wrist during a boat ride.",
    width: 4284,
    height: 5712,
  },
];

const musicPhotos: GalleryImage[] = [
  {
    src: "/blog/shaaf-shahzad/friend-studio-fl-studio.jpeg",
    alt: "A makeshift music studio at a friend's house, with FL Studio open on a laptop at the table.",
    width: 4032,
    height: 3024,
  },
  {
    src: "/blog/shaaf-shahzad/recording-at-home.jpg",
    alt: "Shaaf recording vocals with a microphone and a makeshift acoustic setup.",
    width: 1437,
    height: 1512,
  },
  {
    src: "/blog/shaaf-shahzad/statsfm-top-artists.png",
    alt: "Shaaf's most-played artists on Spotify since roughly 2024, ranked by stats.fm.",
    width: 1600,
    height: 2450,
  },
];

const rainierPhotos: GalleryImage[] = [
  {
    src: "/blog/shaaf-shahzad/mount-rainier-lake.jpeg",
    alt: "Mount Rainier rising above a forest and lake on Shaaf's recent trip.",
    width: 4032,
    height: 3024,
  },
  {
    src: "/blog/shaaf-shahzad/mount-rainier-valley.jpeg",
    alt: "A sunlit mountain valley seen while exploring Mount Rainier.",
    width: 5712,
    height: 4284,
  },
  {
    src: "/blog/shaaf-shahzad/mount-rainier-milk.jpeg",
    alt: "Shaaf holding a small carton of whole milk with Mount Rainier in the background.",
    width: 5712,
    height: 4284,
  },
];

const foodPhotos: GalleryImage[] = [
  {
    src: "/blog/shaaf-shahzad/cafe-sandwiches.jpeg",
    alt: "Two café sandwiches and iced drinks on a table.",
    width: 1206,
    height: 2144,
  },
  {
    src: "/blog/shaaf-shahzad/steak-dinner.jpeg",
    alt: "A steak dinner with mashed potatoes and grilled vegetables.",
    width: 3024,
    height: 4032,
  },
  {
    src: "/blog/shaaf-shahzad/shawarma-platter.jpeg",
    alt: "A large platter of shawarma wraps, fries, pickles, and sauces.",
    width: 5712,
    height: 4284,
  },
  {
    src: "/blog/shaaf-shahzad/brunch-potatoes.png",
    alt: "Two plates of eggs Benedict and breakfast potatoes at brunch.",
    width: 2100,
    height: 2612,
  },
  {
    src: "/blog/shaaf-shahzad/tortilla-ketchup.jpeg",
    alt: "A plain tortilla with ketchup, held up as a deliberately questionable meal.",
    width: 4284,
    height: 5712,
  },
];

const restroomPhotos: GalleryImage[] = [
  {
    src: "/blog/shaaf-shahzad/restroom-archive-grey.jpeg",
    alt: "Shaaf's shoes facing a grey restroom wall and tiled floor.",
    width: 3024,
    height: 4032,
  },
  {
    src: "/blog/shaaf-shahzad/restroom-archive-keys.jpeg",
    alt: "Shaaf's shoes and keys against a restroom's beige tiled floor.",
    width: 3024,
    height: 4032,
  },
  {
    src: "/blog/shaaf-shahzad/restroom-archive-jersey.jpeg",
    alt: "Shaaf's shoes, a blue jersey, and the fixtures of a warmly lit restroom.",
    width: 4284,
    height: 5712,
  },
  {
    src: "/blog/shaaf-shahzad/restroom-archive-soap.jpeg",
    alt: "Shaaf's shoes and a blue soap bottle on a public restroom floor.",
    width: 4284,
    height: 5712,
  },
];

export default function ShaafShahzadPost() {
  return (
    <main className="blog-page blog-article">
      <div className="blog-toolbar">
        <Link className="back-link" href="/blog">
          ← back to blog
        </Link>
        <ThemeSelect />
      </div>

      <header className="article-header">
        <h1 className="accent-cycle">shaaf shahzad</h1>
        <p className="entry-meta">september 1, 2026</p>
      </header>

      <article className="post" aria-label="About Shaaf Shahzad">
        <div className="post-intro">
          <p>
            hi, i&apos;m shaaf. i&apos;m a pakistani-canadian computer
            engineering student at tmu, based around toronto. i spend a lot of
            time moving between software, electronics, and design, but those
            are only part of the story.
          </p>
        </div>

        <section className="post-section">
          <h2>hiking, biking, exploring</h2>
          <p>
            i like getting outside and seeing somewhere new, whether that means
            hiking, biking, or just exploring without much of a plan. a recent
            trip to mount rainier was exactly that kind of reset: mountains,
            forest, water, and enough distance from an ordinary week to make
            everything feel new again.
          </p>
          <p>
            the milk deserves its own explanation: i really like milk. enough
            that a half pint of whole milk somehow became part of the mount
            rainier photo set.
          </p>
          <ImageGallery images={rainierPhotos} />
        </section>

        <section className="post-section">
          <h2>food, all of it</h2>
          <p>
            i really like food, and i am not especially selective about where
            it comes from. i can get equally excited about a café sandwich, a
            proper steak dinner, a giant shawarma platter, or whatever happens
            to be available at home. trying somewhere new is usually part of
            the fun.
          </p>
          <p>
            the last photo is not a recipe recommendation. it is a tortilla
            with ketchup. i included it because it gets to the truth faster
            than the nicer photos do: i will genuinely eat almost anything.
            all food is tasty food.
          </p>
          <ImageGallery images={foodPhotos} className="masonry-gallery" />
        </section>

        <section className="post-section">
          <h2>getting into watches</h2>
          <p>
            i&apos;ve also started getting into watches. it is definitely an
            expensive hobby to discover, so i&apos;m easing into it rather than
            pretending i know everything already. what keeps pulling me in is
            the combination of engineering, history, and design packed into
            something small enough to wear every day.
          </p>
          <p>
            my collection is still small, but i&apos;m enjoying figuring out
            what i actually like: interesting dials, mechanical movements, and
            watches that feel good enough to wear often instead of leaving in a
            box. i&apos;m only just breaking into the hobby, which is probably
            the most fun stage to be in.
          </p>
          <ImageGallery images={watchPhotos} className="masonry-gallery" />
        </section>

        <section className="post-section">
          <h2>football</h2>
          <p>
            soccer is probably the sport i follow most closely. i&apos;ve been
            an arsenal supporter since 2012, which has meant some great
            moments, a lot of patience, and the 2018–2022 stretch—which was,
            honestly, hell. i stuck around anyway. at this point, following the
            club is one of those long-running parts of my life.
          </p>
          <p>
            one of the less great moments came on my birthday. the ticket was
            for manchester city away, and i had to sit among the city fans
            while arsenal lost 5–0. having five goals celebrated around me was
            not exactly the birthday atmosphere i had in mind. not the best
            birthday.
          </p>
          <ImageGallery images={footballPhotos} />
        </section>

        <section className="post-section">
          <h2>music</h2>
          <p>
            me and my friends make music in fl studio. it does not always happen
            in anything resembling a real studio; sometimes it is a laptop on a
            dining table at a friend&apos;s house, with whatever headphones and
            space we can find. that looseness is part of what i enjoy about it.
            a normal room can become a makeshift studio for the night.
          </p>
          <p>
            i listen to music more than i make it. the stats.fm list is probably
            the closest thing to my all-time favourite artists, although
            &quot;all time&quot; really means from around 2024 onward, when i
            switched to spotify. (i swear my taste is more diverse than this
            list makes it look.)
          </p>
          <ImageGallery images={musicPhotos} />
        </section>

        <section className="post-section">
          <h2>the restroom archives</h2>
          <p>
            some people say this is weird. whenever i am handling business in
            a restroom, i take a photo of whatever is directly in front of me.
            no face, no landmark, no attempt at composition—just shoes, tiles,
            and the occasional strategically placed portable bidet.
          </p>
          <p>
            i call it memory fortification. years later, one look at a
            particular grout pattern can bring the entire day rushing back.
            historians keep journals; i keep bathroom-floor establishing
            shots. it may not be dignified, but the archive is remarkably
            specific.
          </p>
          <ImageGallery images={restroomPhotos} className="masonry-gallery" />
        </section>

        <section className="post-section">
          <h2>a few things about me</h2>
          <ul className="personal-facts">
            <li>i learn best by making things and breaking them.</li>
            <li>
              i care about small details and have a hard time leaving something
              alone when it could feel better.
            </li>
            <li>
              i&apos;m drawn to ideas that are useful in everyday life, not
              only impressive on a screen.
            </li>
            <li>
              i value personal authorship, independence, and being able to see
              the result of the work i put in.
            </li>
          </ul>
        </section>

        <section className="post-section">
          <h2>why this blog exists</h2>
          <p>
            this is where i want to keep the parts of my work and life that do
            not fit neatly on a project card: the ideas, false starts, lessons,
            interests, and details that make the finished thing matter to me.
          </p>
        </section>
      </article>
    </main>
  );
}
