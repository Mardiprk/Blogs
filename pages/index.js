import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>

      <Image src="/img.png" height={890} width={1550} />
      <div className={styles.align}>
        <h1>
          NATO allies are preparing for a future without America’s “forever
          wars”
        </h1>
        <h2 style={{ textAlign: "left", fontFamily: "sans-serif" }}>
          How the US’s Afghanistan withdrawal echoed overseas.
        </h2>
        <p className={styles.text}>
          Afghanistan wasn’t just America’s 20-year war. It also belonged to US
          allies.
          <br />
          <br />
          “This has been above all a catastrophe for the Afghan people. It’s a
          failure of the Western world and it’s a game changer for international
          relations,” the European Union’s chief diplomat Josep Borrell told an
          Italian newspaper Monday, according to the Washington Post.
          <br />
          <br />
          “Certainly,” he continued, “we Europeans share our part of
          responsibility. We cannot consider that this was just an American
          war.”
          <br />
          <br />
          As President George W. Bush said in October 2001 while announcing
          airstrikes against al-Qaeda and the Taliban, the US had the
          “collective will of the world” behind its mission in Afghanistan.
          (Iraq, of course, was a different story.) The North Atlantic Treaty
          Organization (NATO) has invoked Article 5 — the common-defense clause
          — only once in its history, after the 9/11 attacks. More than 51 NATO
          members and partner countries sent troops to Afghanistan, with a
          combined 130,000 troops at the deployment’s peak.
          <br />
          <br />
          NATO’s combat mission ended in 2014, but coalition troops remained to
          help train and advise Afghan security forces. Even as some countries
          wound down their military presence in the later years of the war, a
          total of 1,145 allied troops died in Afghanistan of the approximately
          3,500 service members killed.
        </p>
        <Image
          src="/biden.png"
          height={490}
          width={750}
          title="President George W. Bush gives an address on Afghanistan and the war on terror, saying the US “will not fail” at Travis Air Force Base on October 17, 2001"
        />
        <p className={styles.text}>
          The United States, starting with Donald Trump, and continuing with Joe
          Biden, made clear the plan to withdraw from Afghanistan. But the rapid
          collapse of the Afghan government and the swiftness of the Taliban
          takeover turned that departure into chaos. The United States looked
          blundering and inept, and it dragged its allies down with it. Some
          countries struggled to evacuate their personnel and Afghan associates
          as the situation around the Kabul airport worsened. All had to reckon
          with the reality that after 20 years, and lives lost, and billions
          spent, little was left to show for it.
          <br />
          <br />
          That has led to recriminations in London and Berlin and Brussels,
          directed at leaders there, and at the United States. “Was our
          intelligence really so poor?” former British Prime Minister Theresa
          May asked in Parliament earlier this month. “Was our understanding of
          the Afghan government so weak? Was our knowledge on the ground so
          inadequate? Or did we just think we had to follow the United States
          and on a wing and a prayer it would be all right on the night?”
          <br />
          <br />
          Some voices on this side of the Atlantic and the other are simply
          advocating that US engagement in Afghanistan continue indefinitely.
          But even among those who are not, there is a genuine frustration at
          how Afghanistan unraveled, and questions of how closely the US
          consulted with its coalition allies on its withdrawal timeline.
          <br />
          <br />
          That has revived a debate that has beset the transatlantic alliance
          for years, especially during the Donald Trump era: Are the United
          Kingdom and Europe too dependent on the US for their security? And
          will the shifting US priorities finally require correcting that
          imbalance? Katharina Emschermann, deputy director at the Center for
          International Security at the Hertie School in Berlin, said there is
          “uncertainty in Europe about the future course of US foreign policy,
          and what it means for it.”
          <br />
          <br />
          “Part of the discord that we’re seeing now is probably also rooted in
          the sense of unease about how things are going to go on in the
          future,” Emschermann added.
          <br />
          <br />
          It is still unlikely that Afghanistan begins a real remaking of NATO.
          But at the very least, allies may take it as a sign that Joe Biden’s
          reassurances that “America is back” is not enough.
        </p>
      </div>
    </div>
  );
}
