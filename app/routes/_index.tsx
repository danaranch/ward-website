import type { MetaFunction } from "@netlify/remix-runtime";
import ActionButton from "~/components/ActionButton";
import LineItem from "~/components/LineItem";
import LineItemLeadership from "~/components/LineItemLeadership";
import LineItemBold from "~/components/LineItemBold";
import LightRays from "~/components/LightRays";

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
        src="/img/christ-resurrected.jpg"
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
        <p className="text-2xl">May 4, 2025</p>
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
        <LineItemLeadership left="Presiding" right="Bishop Shumway" />
        <LineItemLeadership left="Conducting" right="Bishop Shumway" />
        <LineItemLeadership left="Organist" right="Whitney Kolstad" />
        <LineItemLeadership left="Chorister" right="Joe Capps" />

        <div className="p-8 mt-4 rounded bg-sky-100">
          <div className="text-center">
            <em className="font-semibold text-lg">
              Announcements
            </em>
          </div>
          <ol className="list-decimal ml-5 sticky">
            <li className="pt-1">
              The youth car wash and bake sale is on Saturday, May 10th from
              7:30 - 11:30 AM.
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
          middle="Sweet Hour of Prayer"
          right="142"
          link="https://www.churchofjesuschrist.org/media/music/songs/sweet-hour-of-prayer?lang=eng"
        />
        <LineItem left="Invocation" right="Matt Hulse" />

        <LineItemBold middle="Ward Business" />

        <LineItem
          left="Sacrament Hymn"
          middle="Father In Heaven, We Do Believe"
          right="180"
          link="https://www.churchofjesuschrist.org/media/music/songs/father-in-heaven-we-do-believe?lang=eng"
        />

        <LineItemBold middle="Administration of the Sacrament" />

        <LineItemBold middle="Bearing of Testimonies" />

        {
          /*
        <LineItem left="Speaker" right="Owen Capps" />
        <LineItem left="Speaker" right="Josh Palmer" />

        <LineItem
          left="Intermediate Hymn"
          middle="Let Zion in Her Beauty Rise"
          right="41"
          link="https://www.churchofjesuschrist.org/media/music/songs/let-zion-in-her-beauty-rise?lang=eng"
        />

        <LineItem left="Speaker" right="John Flaherty" />
          */
        }

        <LineItem
          left="Closing Hymn"
          middle="I Need Thee Every Hour"
          right="98"
          link="https://www.churchofjesuschrist.org/media/music/songs/i-need-thee-every-hour?lang=eng"
        />

        <LineItem left="Benediction" right="Camille Better" />
      </div>

      <div className="bg-sky-600 h-24 p-4 flex items-center mt-4">
        <img
          className="h-full"
          src="/img/christus.png"
          alt="Christ"
          height="full"
        />
        <div className="ml-6 text-white font-extrabold">
          <div>Dana Ranch Ward</div>
          <div>Mesa Kimball Stake</div>
        </div>
      </div>
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
