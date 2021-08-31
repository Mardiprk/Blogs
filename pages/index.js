import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>

      <h1
        className={styles.title}
        style={{ fontFamily: "serif", textAlign: "left" }}
      >
        All Companies Should Live by the Jeff Bezos 70 Percent Rule
      </h1>
      <h3>
        A guide to making business decisions—even without all the
        information—inspired by the Amazon CEO.
      </h3>
      <Image src="/jeff.jpg" height={700} width={1000} />
      <p className={styles.text}>
        There are times when companies move too swiftly into a decision that
        hurts them. There are also occasions when they’re too slow and they
        fail. Jeff Bezos lives by a rule that addresses that problem.
      </p>
      <p className={styles.text}>
        In a 2016 annual shareholder letter, Bezos talked about his approach to
        decision making. He suggested that while it’s always nice to have access
        to all of the information someone wants, in the vast majority of cases,
        waiting until you know everything you should know is a problem.
      </p>
      <p className={styles.text}>
        {`“Most decisions should probably be made with somewhere around 70 percent
        of the information you wish you had,” Bezos wrote in the letter. “If you
        wait for 90 percent, in most cases, you're probably being slow.” That’s
        a framework that every business owner should adopt.`}
      </p>
      <p className={styles.text}>
        But how do you know you have 70 percent of the information?
        Unfortunately, it’s hard to say--and Bezos doesn’t have a tried-and-true
        method for knowing. Indeed, it may take time and experience to know when
        it’s time to move and when it’s time to wait.
      </p>
      <p className={styles.text}>
        But generally speaking, consider knowing 70 percent of the information
        on hand when you’ve talked to advisers. Have you analyzed the market
        opportunity and digested the impact (both good and bad) a decision could
        have on your business? Even with all that, you may not know for sure if
        the move you’re about to make is good or bad. And there’s a chance that
        you’ll be wrong. If you know with absolutely certainty it’s the right
        decision, you’re probably too late.
      </p>
      <p className={styles.text}>
        Making sound decisions is critical to running a business, but so is
        knowing how to make a decision. Jeff Bezos has figured that out. Now you
        can, too.
      </p>
    </div>
  );
}
