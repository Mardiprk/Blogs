import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <img
        src="https://cdn.vox-cdn.com/thumbor/BAbxwoi5wPqQibEqIPZ6anL4-I8=/0x0:3791x2131/1820x1024/filters:focal(1583x812:2189x1418):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69733874/final_08092021_allegralockstadt_marianbull.0.jpg"
        height="100%"
        width="100%"
      />
      <h1 className={styles.title}>
        The complicated reality of doing what you love
      </h1>
      <p className={styles.text}>
        I didn’t love my old therapist, but she did give me one crucial piece of
        advice: Get a hobby. I was writing about food for work, so cooking
        didn’t really count as a hobby anymore — I’d already monetized that one
        — nor did reading, nor socializing, especially since all of my friends
        worked in my industry. I needed something in my life that existed apart
        from all that. I was stressed and, of course, also on my phone too much
        (and still am).
      </p>
      <p className={styles.text}>
        Maybe something you can do with your hands. The suggestion felt like an
        escape hatch: Maybe a hobby could free me from toil. Cooking had once
        been the thing I did to relax when I got home from work, the thing I was
        curious about, the thing that distracted my brain from its standard
        litany of complaints. Puttering in the kitchen had once been a release,
        but now it was part of my professional life. It needed a replacement. A
        few months later, I dutifully signed up for a ceramics class at a studio
        nearish my Brooklyn apartment.
      </p>
      <p className={styles.text}>
        This was March 2016. One of my roommates was an artist who had taken a
        class at that same studio, and I always envied the little pots she made.
        One of them was shaped like the face of a woman, with a ponytail for a
        handle. She gave it to me, and I put a small succulent in it that would
        soon die. I hoped that taking a class could make me more like her, or at
        the very least, happier — and if not that, well, maybe I’d make myself a
        bowl to put pasta in.
      </p>
      <p className={styles.text}>
        Learning to make ceramics on the wheel — this is what you picture when
        you think of that scene from Ghost — feels initially impossible,
        pointless, tantrum-inducing. In class, our teacher showed us how to take
        a blob of clay and slam it onto the machine’s surface, strong-arm it
        into symmetry as the wheel whirred around, dig a hole in its center with
        our fingers, make the hole wider, and then raise up the walls that would
        make it a vessel. Doing it on my own was another thing entirely: a
        reminder of the unkind presence of physics, an asymmetrical lump
        thwapping around like an off-balance tornado, just some really ugly shit
        that would occasionally collapse in on itself.
      </p>
      <p className={styles.text}>
        This is par for the course. Most of us suck at first. The stuff you made
        in second-grade art class was objectively better. Clay shrinks when
        fired in a kiln, so the first mugs I made that weren’t ugly came out
        more like handled thimbles. Glazing each piece — decorating it with the
        often-colorful vitrified coating that makes it water-tight and
        food-safe, and glossy or matte — was its own messy challenge. My goal
        became not to make art or even craft, so much as to make things I didn’t
        hate. Of course, failing at something new doesn’t feel good; it feels
        like banging your head against a wall in front of an invisible audience
        of your own making. Turning off the desire to excel once you leave work
        is often impossible, if not difficult.
      </p>
      <p className={styles.text}>
        That said, the pace of my failure was different at the studio. Making
        ceramics requires patience and is an exercise in delayed gratification
        (or dissatisfaction). There are so many ways to fuck something up, so
        many stages to the process, and entering that cycle of hope,
        expectation, and either failure and trying again or ecstatic
        satisfaction added a new dimension to the rhythms of my life.
      </p>
      <Link href="/about">
        <a className={styles.btn}>About us</a>
      </Link>
    </div>
  );
}
