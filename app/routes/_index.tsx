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
        <p className="text-2xl">December 29, 2024</p>
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
        <LineItem left="Organist" right="Whitney Kolstad" />
        <LineItem left="Chorister" right="Joe Capps" />

        <div className="bg-sky-600 rounded p-4 text-white my-2 pt-8 relative overflow-hidden">
          <img
            className="absolute left-0 top-0 w-full rounded opacity-75"
            src="/img/light-rays.svg"
            alt="light-rays"
          />
          <em className="sticky text-lg font-semibold">Announcements</em>
          <ol className="list-decimal ml-5 sticky">
            <li className="pt-1">
              There will be a Youth Stake New Year's Eve Concert on December 31st at 7:30pm in the
              South parking lot at the Stake Center.
            </li>
            <li className="pt-1">
              Mission and Life Skills Prep for all Juniors and Seniors is held
              every 2nd and 4th Sunday at 4pm in the Relief Society room.
            </li>
          </ol>
        </div>

        <LineItem
          left="Opening Hymn"
          middle="Come, Let us Anew"
          right="217"
        />
        <LineItem left="Invocation" right="Cindy Fast" />

        <LineItemBold middle="Ward Business" />

        <LineItem
          left="Sacrament Hymn"
          middle="Behold the Wounds in Jesus' Hands"
          right="1016"
        />
        <LineItemBold middle="Administration of the Sacrament" />

        {
          /*
        <LineItemBold middle="Bearing of Testimonies" />
        */
        }

        <LineItem left="Speaker" right="Fenix Huffaker" />
        <LineItem left="Intermediate Hymn" middle="He is Born, the Divine Christ Child" right="1202" />
        <LineItem left="Speaker" right="Kinsey Wallace" />
        <LineItem left="Speaker" right="Carsten Brady" />

        <LineItem
          left="Closing Hymn"
          middle="Jesus, Savior, Pilot Me"
          right="104"
        />

        <LineItem left="Benediction" right="Lisa Brandt" />
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
