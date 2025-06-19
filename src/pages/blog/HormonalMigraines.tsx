
import BlogLayout from '../../components/blog/BlogLayout';
import Conclusion from '../../components/blog/hormonal-migraines/Conclusion';
import HormonalConnection from '../../components/blog/hormonal-migraines/HormonalConnection';
import MenstrualMigraines from '../../components/blog/hormonal-migraines/MenstrualMigraines';
import LifeStages from '../../components/blog/hormonal-migraines/LifeStages';
import TreatmentStrategies from '../../components/blog/hormonal-migraines/TreatmentStrategies';
import TrackingSection from '../../components/blog/hormonal-migraines/TrackingSection';
import HealthcareTeam from '../../components/blog/hormonal-migraines/HealthcareTeam';

const HormonalMigraines = () => {
  return (
    <BlogLayout
      title="Migraine in Women:"
      subtitle="Understanding Hormonal Triggers"
      description="Discover why women experience migraines three times more often than men and learn practical strategies for managing hormonal triggers throughout different life stages."
      readTime="11 min read"
      date="June 19, 2025"
      featuredImage="/lovable-uploads/a2790d58-1d26-4f63-8be0-6a74b592b76a.png"
      featuredImageAlt="Women's hormonal migraine patterns"
    >
      <Conclusion />
      <HormonalConnection />
      <MenstrualMigraines />
      <LifeStages />
      <TreatmentStrategies />
      <TrackingSection />
      <HealthcareTeam />
    </BlogLayout>
  );
};

export default HormonalMigraines;
