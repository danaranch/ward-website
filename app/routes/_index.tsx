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
        src="/img/mothers-day.jpg"
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
        <p className="text-2xl">May 11, 2025</p>
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
        <LineItemLeadership left="Organist" right="Joe Capps" />
        <LineItemLeadership left="Chorister" right="Laurel Cronin" />

        <div className="p-8 mt-4 rounded bg-sky-100">
          <div className="text-center">
            <em className="font-semibold text-lg">
              Announcements
            </em>
          </div>
          <ol className="list-decimal ml-5 sticky">
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
          middle="Home Can Be a Heaven on Earth"
          right="298"
          link="https://www.churchofjesuschrist.org/media/music/songs/home-can-be-a-heaven-on-earth?lang=eng"
        />
        <LineItem left="Invocation" right="Mike Wilhelm" />

        <LineItemBold middle="Ward Business" />

        <LineItem
          left="Sacrament Hymn"
          middle="Jesus of Nazareth, Savior and King"
          right="181"
          link="https://www.churchofjesuschrist.org/media/music/songs/jesus-of-nazareth-savior-and-king?lang=eng"
        />

        <LineItemBold middle="Administration of the Sacrament" />

        {
          /*
        <LineItemBold middle="Bearing of Testimonies" />
          */
        }

        <LineItem left="Speaker" right="Damario Gough" />
        <LineItem left="Speaker" right="Chris Coleman" />

        <LineItem
          left="Musical Number"
          middle="Love is Spoken Here"
          right="Anne Flaherty & Deanne Hoover"
        />

        <LineItem left="Speaker" right="Mike Cooley" />

        <LineItem
          left="Closing Hymn"
          middle="Teach Me to Walk in the Light"
          right="304"
          link="https://www.churchofjesuschrist.org/media/music/songs/teach-me-to-walk-in-the-light?lang=eng"
        />

        <LineItem left="Benediction" right="Duane Gunn" />
      </div>

      {/* TODO: Abstract into footer component */}
      <div className="h-20 flex items-center justify-between mt-4 bg-neutral-100">
        <div className="h-20 flex justify-center item-start">
          <div className="bg-[#0ea5e9] p-2 h-full">
            <img
              className="h-full"
              src="/img/christus.png"
              alt="Christ"
              height="full"
            />
          </div>
          <span className="h-full relative" style={{ left: -1, top: -1 }}>
            <LightRays color="#0ea5e9" />
          </span>
        </div>
        <div className="mr-6 text-slate-800 text-right font-extrabold">
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
