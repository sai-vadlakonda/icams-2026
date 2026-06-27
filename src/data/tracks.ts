export interface Track {
  id: number;
  title: string;
  topics: string[];
}

export const TRACKS: Track[] = [
  {
    id: 1,
    title: 'Materials & Composites',
    topics: [
      'Advanced Structural Materials',
      'Polymer Composites',
      'Nanomaterials',
      'Biomaterials',
      'Smart & Functional Materials',
      'Material Characterization Techniques',
      'Sustainable & Eco-friendly Materials',
    ],
  },
  {
    id: 2,
    title: 'Advanced Manufacturing',
    topics: [
      'Additive Manufacturing & 3D Printing',
      'Precision & Micro Manufacturing',
      'Computer Integrated Manufacturing',
      'Lean & Smart Manufacturing',
      'Industry 4.0 & Digital Twins',
      'Welding & Joining Technologies',
      'Surface Engineering',
    ],
  },
  {
    id: 3,
    title: 'Renewable Energy',
    topics: [
      'Solar Thermal & Photovoltaic Systems',
      'Wind Energy Systems',
      'Bioenergy & Biofuels',
      'Hydrogen & Fuel Cell Technologies',
      'Energy Storage Systems',
      'Energy Efficiency & Conservation',
      'Hybrid Renewable Energy Systems',
    ],
  },
  {
    id: 4,
    title: 'Thermal & Fluid Engineering',
    topics: [
      'Heat Transfer & Heat Exchangers',
      'Computational Fluid Dynamics (CFD)',
      'Refrigeration & Air Conditioning',
      'IC Engines & Combustion',
      'Multiphase Flow',
      'Turbomachinery',
      'Tribology & Lubrication',
    ],
  },
  {
    id: 5,
    title: 'Design & Computational Engineering',
    topics: [
      'Design Optimization Techniques',
      'Finite Element Analysis (FEA)',
      'CAD/CAM/CAE Applications',
      'Vibration & Acoustics',
      'Mechanism & Machine Design',
      'Structural Health Monitoring',
      'Reliability & Fatigue Analysis',
    ],
  },
  {
    id: 6,
    title: 'Robotics, AI & Automation',
    topics: [
      'Industrial & Collaborative Robotics',
      'AI & Machine Learning in Mechanical Engineering',
      'Mechatronics & Automation',
      'Sensors & Actuators',
      'Autonomous Systems',
      'Human-Robot Interaction',
      'Digital Manufacturing Intelligence',
    ],
  },
  {
    id: 7,
    title: 'Aerospace & Automotive Engineering',
    topics: [
      'Aerodynamics & Propulsion',
      'Structural Design of Aerospace Vehicles',
      'Electric & Hybrid Vehicles',
      'Vehicle Dynamics & Safety',
      'Lightweight Structures',
      'UAV & Drone Technologies',
      'Automotive Materials & Manufacturing',
    ],
  },
];
