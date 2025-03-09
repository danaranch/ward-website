import type { MetaFunction } from "@netlify/remix-runtime";
import ActionButton from "~/components/ActionButton";
import LineItem from "~/components/LineItem";
import LineItemBold from "~/components/LineItemBold";

export const meta: MetaFunction = () => {
  return [
    { title: "Dana Ranch Ward" },
    { name: "description", content: "Dana Ranch Ward Order Of Services" },
  ];
};

export default function Index() {
  return (
    /**
     * TODO: New component
     * - gets date automatically
     * - switces hero img by month automatically
     */
    <div className="w-full h-full">
      <img
        src="/img/christ_little_ones.jpg"
        className="pb-4 m-auto"
        alt="jesus"
      />
      <img
        src="/img/modern-logo.png"
        className="m-auto w-3/4 md:w-1/2 xl:w-1/3"
        alt="church-logo"
      />
      <div key="title-credits" className="church-font text-center p-1 py-2">
        <p className="text-2xl">Dana Ranch Ward</p>
        <p className="text-3xl">Sacrament Meeting</p>
        <p className="text-2xl">March 9, 2025</p>
      </div>

      {
        /*
      TODO: Remove component from index when we get posters for foyer
      */
      }
      <div className="pt-4">
        <ActionButton
          link="https://zoom.us/j/98508434243"
          text="Join via broadcast"
        />
      </div>
      <hr className="h-px my-8 bg-gray-400 border-0" />

      <div id="services" className="mx-2">
        <LineItem left="Presiding" right="Bishop Shumway" />
        <LineItem left="Conducting" right="Will Shoemaker" />
        <LineItem left="Organist" right="Joe Capps" />
        <LineItem left="Chorister" right="Brie Wadsworth-Gates" />

        <div className="bg-sky-600 rounded p-4 text-white my-2 pt-8 relative overflow-hidden">
          <img
            className="absolute left-0 top-0 w-full rounded opacity-75"
            src="/img/light-rays.svg"
            alt="light-rays"
          />
          <em className="sticky text-lg font-semibold">Announcements</em>
          <ol className="list-decimal ml-5 sticky">
            <li className="pt-1">
              Bishop's Hang Out: Cereal Sunday.
              All priests and young women class 16-18 are invited to the Shumway's
              home on the third Sunday of each month from 7:00-8:30 pm.
            </li>
            <li className="pt-1">
              Mission and Life Skills Prep for all Juniors and Seniors is held
              every 2nd and 4th Sunday at 3pm in the Relief Society room.
            </li>
          </ol>
        </div>

        <LineItem
          left="Opening Hymn"
          middle="Now Let us Rejoice"
          right="3"
          link="https://www.churchofjesuschrist.org/media/music/songs/now-let-us-rejoice?lang=eng"
        />
        <LineItem left="Invocation" right="Rob Anderson" />

        <LineItemBold middle="Ward Business" />

        <LineItem
          left="Sacrament Hymn"
          middle="As Now We Take the Sacrament"
          right="169"
          link="https://www.churchofjesuschrist.org/media/music/songs/as-now-we-take-the-sacrament?lang=eng"
        />

        <LineItemBold middle="Administration of the Sacrament" />

        {
          /*
        <LineItemBold middle="Bearing of Testimonies" />
          */
        }

        <LineItem left="Speaker" right="Missionaries" />
        <LineItem left="Speaker" right="David Malone" />
        <LineItem
          left="Intermediate Hymn"
          middle="Have I done any Good?"
          right="223"
          link="https://www.churchofjesuschrist.org/media/music/songs/have-i-done-any-good?lang=eng"
        />
        <LineItem left="Speaker" right="Sydney Kent" />

        <LineItem
          left="Closing Hymn"
          middle="Prayer is the Souls Sincere Desire"
          right="145"
          link="https://www.churchofjesuschrist.org/media/music/songs/prayer-is-the-souls-sincere-desire?lang=eng"
        />

        <LineItem left="Benediction" right="Jane Beagle" />
      </div>

      <hr className="h-px my-8 bg-gray-400 border-0" />
    </div>
  );
}

/**
 * TODO:
 * Scaffold out what a relational db schema would look like
 * with this data model (laying the groundwork for lcr.danaranchward.org)
 * - members table
 *  - will need UI tool to sync/upload from a report from actual LCR. CSV compat likely.
 *  - will need upload endpoint to be able to dedupe members and also create new entries in members table.
 *  - will need ability to add "flag" or "annotation" rules to disable showing on speakers upcoming, etc. With UI to list/edit.
 * - prayers table
 *  - each entry will have a simple record of date, member ID, and type "opening" or "closing"
 * - speakers table
 *  - each entry will have simple record of date and member ID
 */
