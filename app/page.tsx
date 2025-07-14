import CompanionCard from "@/components/CompanionCard"
import CompanionsList from "@/components/CompanionsList"
import Cta from "@/components/CTA"
import { recentSessions } from "@/constants"


const Page = async () => {
  // const companions = await getAllCompanions({ limit: 3 });
  // const recentSessionsCompanions = await getRecentSessions(10);

  return (
    <main>
      <h1 className="text-red-600">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="1"
          name="Companion 1"
          topic="Topic 1"
          subject="Subject 1"
          duration={30}
          color="#f00"
          bookmarked={false}
        />
        <CompanionCard
          id="2"
          name="Companion 2"
          topic="Topic 2"
          subject="Subject 2"
          duration={45}
          color="#0f0"
          bookmarked={true}
        />
        <CompanionCard
          id="3"
          name="Companion 3"
          topic="Topic 3"
          subject="Subject 3"
          duration={60}
          color="#00f"
          bookmarked={false}
        />
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recent Companions"
          companions={recentSessions}
          classNames="recent-companions"
        />
        <Cta />

      </section>
    </main>
  )
}

export default Page