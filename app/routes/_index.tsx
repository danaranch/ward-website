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
        src="/img/bethseda.jpeg"
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
        <p className="text-2xl">April 13, 2025</p>
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
        <LineItem left="Chorister" right="Julie Clement" />

        <div className="bg-sky-600 rounded p-4 text-white my-2 pt-8 relative overflow-hidden">
          <img
            className="absolute left-0 top-0 w-full rounded opacity-75"
            src="/img/light-rays.svg"
            alt="light-rays"
          />
          <em className="sticky text-lg font-semibold">Announcements</em>
          <ol className="list-decimal ml-5 sticky">
            <li className="pt-1">
              The ward Easter party will be held on Saturday 4/19/25 from 7pm to 8:30pm at our ward building.
            </li>
            <li className="pt-1">
              Next week, April 20th, is Easter. There will only be sacrament meeting,
              with no second hour to allow families to spend time together.
            </li>
            <li className="pt-1">
              Bishop's Hang Out: Cereal Sunday. All priests and young women
              class 16-18 are invited to the Shumway's home on the third Sunday
              of each month from 7:00-8:30 pm.
            </li>
            <li className="pt-1">
              Mission and Life Skills Prep for all Juniors and Seniors is held
              every 2nd and 4th Sunday at 3pm in the Relief Society room.
            </li>
          </ol>
        </div>

        <LineItem
          left="Opening Hymn"
          middle="Hail The Day That Sees Him Rise"
          right="1201"
          link="https://www.churchofjesuschrist.org/media/music/songs/hail-the-day-that-sees-him-rise?lang=eng"
        />
        <LineItem left="Invocation" right="Paden Gray" />

        <LineItemBold middle="Ward Business" />

        <LineItem
          left="Sacrament Hymn"
          middle="O God, the Eternal Father"
          right="175"
          link="https://www.churchofjesuschrist.org/media/music/songs/o-god-the-eternal-father?lang=eng"
        />

        <LineItemBold middle="Administration of the Sacrament" />

        {
          /*
        <LineItemBold middle="Bearing of Testimonies" />
          */
        }

        <LineItem
          left="Special Musical Number"
          middle="Tell Me the Stories of Jesus"
          right="Mason and Bristol Gray"
        />
        <LineItem left="Speaker" right="Caitlin Jarman" />
        <LineItem
          left="Special Musical Number"
          middle="There is a Green Hill Far Away"
          right="Jackson Roberts"
        />
        <LineItem left="Speaker" right="Justun Richardson" />
        <LineItem
          left="Special Musical Number"
          middle="He Sent His Son"
          right="Jade and Chloe Overstreet"
        />
        <LineItem left="Speaker" right="MaryAnn Kaberry" />
        <LineItem
          left="Special Musical Number"
          middle="Come, Lord Jesus"
          right="DJ Gates"
        />

        {
          /*
        <LineItem
          left="Intermediate Hymn"
          middle="Standing on the Promises"
          right="1023"
          link="https://www.churchofjesuschrist.org/media/music/songs/standing-on-the-promises?lang=eng"
        />
        */
        }

        <LineItem
          left="Closing Hymn"
          middle="I Know That My Redeemer Lives"
          right="136"
          link="https://www.churchofjesuschrist.org/media/music/songs/i-know-that-my-redeemer-lives?lang=eng"
        />

        <LineItem left="Benediction" right="Kelly Hardy" />
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
