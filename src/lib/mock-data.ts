// Realistic mock data for all pages

export const mockTeamMembers = [
  { id: '1', name: 'Priya Sharma', role: 'Creative Director', avatar: 'https://i.pravatar.cc/150?img=1', status: 'online', skills: ['Fashion', 'Editorial', 'Art Direction'], tasksCompleted: 156, projects: 23 },
  { id: '2', name: 'Arjun Mehta', role: 'Lead Developer', avatar: 'https://i.pravatar.cc/150?img=3', status: 'online', skills: ['React', 'TypeScript', 'AI/ML'], tasksCompleted: 234, projects: 18 },
  { id: '3', name: 'Ananya Patel', role: 'UI/UX Designer', avatar: 'https://i.pravatar.cc/150?img=5', status: 'away', skills: ['Figma', 'Prototyping', 'Research'], tasksCompleted: 189, projects: 15 },
  { id: '4', name: 'Rahul Verma', role: 'Backend Engineer', avatar: 'https://i.pravatar.cc/150?img=7', status: 'offline', skills: ['Node.js', 'PostgreSQL', 'DevOps'], tasksCompleted: 201, projects: 20 },
  { id: '5', name: 'Sneha Reddy', role: 'Marketing Lead', avatar: 'https://i.pravatar.cc/150?img=9', status: 'online', skills: ['SEO', 'Content Strategy', 'Analytics'], tasksCompleted: 145, projects: 12 },
  { id: '6', name: 'Vikram Singh', role: 'Product Manager', avatar: 'https://i.pravatar.cc/150?img=11', status: 'online', skills: ['Agile', 'Strategy', 'Roadmapping'], tasksCompleted: 178, projects: 25 },
];

export const mockProjects = [
  { id: '1', title: 'Summer Fashion Campaign', status: 'active', progress: 75, cover: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400', team: ['1', '3', '5'], tags: ['Fashion', 'Campaign'], lastUpdated: '2026-02-22', deadline: '2026-03-15', description: 'Annual summer collection campaign featuring top Indian models across Mumbai and Delhi.' },
  { id: '2', title: 'AI Model Matching v2.0', status: 'active', progress: 45, cover: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400', team: ['2', '4'], tags: ['Tech', 'AI'], lastUpdated: '2026-02-21', deadline: '2026-04-01', description: 'Next-generation AI matching algorithm for connecting models with perfect campaigns.' },
  { id: '3', title: 'Bridal Collection Shoot', status: 'completed', progress: 100, cover: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400', team: ['1', '3'], tags: ['Bridal', 'Photography'], lastUpdated: '2026-02-18', deadline: '2026-02-20', description: 'Premium bridal collection photoshoot for leading designers.' },
  { id: '4', title: 'Mobile App Redesign', status: 'active', progress: 30, cover: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400', team: ['2', '3', '6'], tags: ['Mobile', 'Design'], lastUpdated: '2026-02-20', deadline: '2026-05-01', description: 'Complete redesign of the GSMODELING mobile application.' },
  { id: '5', title: 'Influencer Partnership Program', status: 'planning', progress: 10, cover: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400', team: ['5', '6'], tags: ['Marketing', 'Partnership'], lastUpdated: '2026-02-19', deadline: '2026-06-01', description: 'Strategic partnership program with top Indian social media influencers.' },
  { id: '6', title: 'Fitness Model Portal', status: 'active', progress: 60, cover: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400', team: ['2', '4', '6'], tags: ['Fitness', 'Portal'], lastUpdated: '2026-02-22', deadline: '2026-03-30', description: 'Dedicated portal for fitness models and trainers.' },
];

export const mockTasks = [
  { id: '1', title: 'Design hero section for campaign page', status: 'done', priority: 'high', assignee: '3', dueDate: '2026-02-20', project: '1', labels: ['Design', 'UI'] },
  { id: '2', title: 'Implement AI matching algorithm', status: 'in_progress', priority: 'urgent', assignee: '2', dueDate: '2026-02-25', project: '2', labels: ['Backend', 'AI'] },
  { id: '3', title: 'Write campaign copy for summer launch', status: 'in_progress', priority: 'high', assignee: '5', dueDate: '2026-02-23', project: '1', labels: ['Content', 'Marketing'] },
  { id: '4', title: 'Set up database schema for bookings', status: 'done', priority: 'medium', assignee: '4', dueDate: '2026-02-18', project: '2', labels: ['Backend', 'Database'] },
  { id: '5', title: 'Create mobile wireframes', status: 'backlog', priority: 'medium', assignee: '3', dueDate: '2026-03-01', project: '4', labels: ['Design', 'Mobile'] },
  { id: '6', title: 'Integrate payment gateway', status: 'in_progress', priority: 'high', assignee: '4', dueDate: '2026-02-26', project: '2', labels: ['Backend', 'Payments'] },
  { id: '7', title: 'Review bridal shoot photos', status: 'review', priority: 'low', assignee: '1', dueDate: '2026-02-22', project: '3', labels: ['Photography', 'Review'] },
  { id: '8', title: 'Optimize model search performance', status: 'backlog', priority: 'medium', assignee: '2', dueDate: '2026-03-05', project: '2', labels: ['Performance', 'Backend'] },
  { id: '9', title: 'Design fitness trainer profiles', status: 'in_progress', priority: 'medium', assignee: '3', dueDate: '2026-02-28', project: '6', labels: ['Design', 'Fitness'] },
  { id: '10', title: 'Plan influencer outreach strategy', status: 'backlog', priority: 'low', assignee: '5', dueDate: '2026-03-10', project: '5', labels: ['Marketing', 'Strategy'] },
];

export const mockRevenueData = [
  { month: 'Mar', revenue: 32000, lastYear: 28000 },
  { month: 'Apr', revenue: 45000, lastYear: 31000 },
  { month: 'May', revenue: 38000, lastYear: 35000 },
  { month: 'Jun', revenue: 52000, lastYear: 42000 },
  { month: 'Jul', revenue: 61000, lastYear: 48000 },
  { month: 'Aug', revenue: 55000, lastYear: 52000 },
  { month: 'Sep', revenue: 68000, lastYear: 55000 },
  { month: 'Oct', revenue: 72000, lastYear: 61000 },
  { month: 'Nov', revenue: 85000, lastYear: 68000 },
  { month: 'Dec', revenue: 92000, lastYear: 75000 },
  { month: 'Jan', revenue: 78000, lastYear: 70000 },
  { month: 'Feb', revenue: 95000, lastYear: 80000 },
];

export const mockWeeklyActivity = [
  { day: 'Mon', bookings: 12, inquiries: 24, applications: 8 },
  { day: 'Tue', bookings: 18, inquiries: 31, applications: 15 },
  { day: 'Wed', bookings: 15, inquiries: 28, applications: 12 },
  { day: 'Thu', bookings: 22, inquiries: 35, applications: 18 },
  { day: 'Fri', bookings: 28, inquiries: 42, applications: 22 },
  { day: 'Sat', bookings: 10, inquiries: 18, applications: 6 },
  { day: 'Sun', bookings: 5, inquiries: 12, applications: 3 },
];

export const mockActivityFeed = [
  { id: '1', user: 'Priya Sharma', avatar: 'https://i.pravatar.cc/150?img=1', action: 'approved booking for Mumbai Fashion Week', time: '2 minutes ago', type: 'booking' },
  { id: '2', user: 'Arjun Mehta', avatar: 'https://i.pravatar.cc/150?img=3', action: 'deployed AI matching algorithm v2.1', time: '15 minutes ago', type: 'tech' },
  { id: '3', user: 'Sneha Reddy', avatar: 'https://i.pravatar.cc/150?img=9', action: 'published new campaign on Instagram', time: '1 hour ago', type: 'marketing' },
  { id: '4', user: 'Ananya Patel', avatar: 'https://i.pravatar.cc/150?img=5', action: 'submitted designs for fitness portal', time: '2 hours ago', type: 'design' },
  { id: '5', user: 'Vikram Singh', avatar: 'https://i.pravatar.cc/150?img=11', action: 'closed Q4 sprint with 98% completion', time: '3 hours ago', type: 'management' },
  { id: '6', user: 'Rahul Verma', avatar: 'https://i.pravatar.cc/150?img=7', action: 'optimized database queries by 40%', time: '5 hours ago', type: 'tech' },
];

export const mockNotifications = [
  { id: '1', icon: 'bell', message: 'New booking request from Lakme Fashion Week', time: '5 min ago', read: false, type: 'booking' },
  { id: '2', icon: 'user', message: 'Priya Sharma mentioned you in a comment', time: '20 min ago', read: false, type: 'mention' },
  { id: '3', icon: 'check', message: 'Campaign "Summer 2026" approved by admin', time: '1 hour ago', read: false, type: 'system' },
  { id: '4', icon: 'alert', message: 'Payment of ₹15,000 received from Brand Co.', time: '2 hours ago', read: true, type: 'payment' },
  { id: '5', icon: 'star', message: 'Your profile was viewed 150 times today', time: '3 hours ago', read: true, type: 'analytics' },
  { id: '6', icon: 'mail', message: 'New casting call matching your profile', time: 'Yesterday', read: true, type: 'casting' },
  { id: '7', icon: 'calendar', message: 'Reminder: Bridal shoot tomorrow at 10 AM', time: 'Yesterday', read: true, type: 'reminder' },
  { id: '8', icon: 'trending', message: 'Your AI match score increased to 95%', time: '2 days ago', read: true, type: 'system' },
];

export const mockBlogPosts = [
  { id: '1', slug: 'future-of-ai-modeling', title: 'The Future of AI in the Modeling Industry', excerpt: 'How artificial intelligence is transforming talent discovery and reshaping the fashion world forever.', category: 'Technology', author: { name: 'Vikram Singh', avatar: 'https://i.pravatar.cc/150?img=11' }, readTime: '8 min', date: '2026-02-20', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600', featured: true },
  { id: '2', slug: 'top-modeling-trends-2026', title: 'Top Modeling Trends to Watch in 2026', excerpt: 'From sustainable fashion to digital avatars, explore the trends defining the next era of modeling.', category: 'Fashion', author: { name: 'Priya Sharma', avatar: 'https://i.pravatar.cc/150?img=1' }, readTime: '6 min', date: '2026-02-18', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600', featured: false },
  { id: '3', slug: 'building-your-portfolio', title: 'Building a Stunning Model Portfolio in 2026', excerpt: 'Essential tips and strategies for creating a portfolio that catches every agency and brand attention.', category: 'Guide', author: { name: 'Ananya Patel', avatar: 'https://i.pravatar.cc/150?img=5' }, readTime: '10 min', date: '2026-02-15', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600', featured: false },
  { id: '4', slug: 'indian-fashion-week-recap', title: 'Indian Fashion Week 2026: A Complete Recap', excerpt: 'Highlights, standout moments, and the rising stars from this year Indian Fashion Week.', category: 'Events', author: { name: 'Sneha Reddy', avatar: 'https://i.pravatar.cc/150?img=9' }, readTime: '12 min', date: '2026-02-12', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600', featured: false },
  { id: '5', slug: 'fitness-modeling-guide', title: 'Complete Guide to Fitness Modeling', excerpt: 'Everything you need to know about breaking into the fitness modeling industry in India.', category: 'Guide', author: { name: 'Arjun Mehta', avatar: 'https://i.pravatar.cc/150?img=3' }, readTime: '9 min', date: '2026-02-10', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600', featured: false },
  { id: '6', slug: 'bridal-photography-tips', title: 'Bridal Photography: Tips from Top Photographers', excerpt: 'Professional photographers share their secrets for capturing breathtaking bridal moments.', category: 'Photography', author: { name: 'Priya Sharma', avatar: 'https://i.pravatar.cc/150?img=1' }, readTime: '7 min', date: '2026-02-08', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600', featured: false },
];

export const mockPricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 999,
    annualPrice: 9990,
    description: 'Perfect for new models getting started',
    features: ['Basic profile listing', 'Up to 10 portfolio images', 'Email support', 'Basic analytics', 'Community access'],
    popular: false,
  },
  {
    id: 'pro',
    name: 'Professional',
    monthlyPrice: 2499,
    annualPrice: 24990,
    description: 'For established models and agencies',
    features: ['Priority profile listing', 'Unlimited portfolio images', 'AI-powered matching', 'Advanced analytics dashboard', 'Priority support', 'Campaign applications', 'Social media integration', 'Video portfolio support'],
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: 9999,
    annualPrice: 99990,
    description: 'For agencies and large brands',
    features: ['Custom branding', 'Unlimited team members', 'Dedicated account manager', 'API access', 'Custom integrations', 'White-label options', 'Bulk talent management', 'Advanced reporting', 'SLA guarantee', '24/7 phone support'],
    popular: false,
  },
];

export const mockFAQs = [
  { question: 'How does AI-powered matching work?', answer: 'Our AI analyzes model profiles, campaign requirements, brand preferences, and historical data to find the perfect match. The algorithm considers factors like style, experience, location, and past performance to deliver a 95%+ match rate.' },
  { question: 'Is my data secure on GSMODELING?', answer: 'Absolutely. We use enterprise-grade encryption, row-level security policies, and comply with GDPR and Indian data protection laws. Your portfolio, personal information, and payment details are fully encrypted at rest and in transit.' },
  { question: 'Can I switch plans at any time?', answer: 'Yes! You can upgrade or downgrade your plan at any time. When upgrading, the price difference is prorated. When downgrading, the remaining credit is applied to your next billing cycle.' },
  { question: 'How do agencies use the platform?', answer: 'Agencies get a dedicated dashboard to manage their roster, review casting calls, track bookings, handle commissions, and use AI to match their models with suitable campaigns. Premium agency features include bulk management and analytics.' },
  { question: 'What payment methods do you accept?', answer: 'We accept UPI (PhonePe, Google Pay, Paytm), credit/debit cards (Visa, Mastercard, RuPay), net banking, and international payments via PayU and Razorpay. All transactions are processed securely.' },
  { question: 'How long does profile verification take?', answer: 'Standard verification takes 24-48 hours. Premium members get priority verification within 6 hours. Our team manually reviews each profile to maintain quality standards across the platform.' },
];

export const mockTestimonials = [
  { id: '1', name: 'Isha Kapoor', role: 'Fashion Model', avatar: 'https://i.pravatar.cc/150?img=20', rating: 5, text: 'GSMODELING transformed my career. The AI matching connected me with campaigns I never would have found. Booked 15 shows in my first 3 months!' },
  { id: '2', name: 'Ravi Kumar', role: 'Agency Director', avatar: 'https://i.pravatar.cc/150?img=12', rating: 5, text: 'Managing our roster of 200+ models was a nightmare before GSMODELING. Now everything is streamlined, and the analytics help us make better decisions.' },
  { id: '3', name: 'Meera Nair', role: 'Brand Manager', avatar: 'https://i.pravatar.cc/150?img=25', rating: 5, text: 'We reduced our casting time by 70% using the platform. The quality of talent is exceptional, and the booking process is seamless.' },
  { id: '4', name: 'Aditya Joshi', role: 'Fitness Model', avatar: 'https://i.pravatar.cc/150?img=15', rating: 4, text: 'As a fitness model, finding the right gigs was always challenging. GSMODELING AI understands my niche and connects me with perfect opportunities.' },
];

export const mockDocsSections = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', slug: 'introduction' },
      { title: 'Quick Start Guide', slug: 'quick-start' },
      { title: 'Creating Your Profile', slug: 'creating-profile' },
      { title: 'Platform Overview', slug: 'overview' },
    ],
  },
  {
    title: 'For Models',
    items: [
      { title: 'Portfolio Setup', slug: 'portfolio-setup' },
      { title: 'AI Matching', slug: 'ai-matching' },
      { title: 'Booking Management', slug: 'booking-management' },
      { title: 'Analytics Dashboard', slug: 'model-analytics' },
    ],
  },
  {
    title: 'For Agencies',
    items: [
      { title: 'Roster Management', slug: 'roster-management' },
      { title: 'Campaign Discovery', slug: 'campaign-discovery' },
      { title: 'Commission Tracking', slug: 'commission-tracking' },
      { title: 'Premium Features', slug: 'premium-features' },
    ],
  },
  {
    title: 'API Reference',
    items: [
      { title: 'Authentication', slug: 'api-auth' },
      { title: 'Models Endpoint', slug: 'api-models' },
      { title: 'Bookings Endpoint', slug: 'api-bookings' },
      { title: 'Webhooks', slug: 'api-webhooks' },
    ],
  },
];

export const mockKPIs = [
  { label: 'Total Users', value: '12,847', change: '+12.5%', trend: 'up', sparkline: [30, 35, 40, 38, 45, 50, 55, 52, 60, 65, 72, 78] },
  { label: 'Revenue (₹)', value: '9,50,000', change: '+23.1%', trend: 'up', sparkline: [20, 25, 30, 28, 35, 40, 45, 42, 50, 55, 65, 72] },
  { label: 'Active Projects', value: '342', change: '+8.3%', trend: 'up', sparkline: [50, 48, 55, 52, 58, 60, 62, 65, 70, 68, 72, 75] },
  { label: 'Platform Uptime', value: '99.97%', change: '+0.02%', trend: 'up', sparkline: [99, 99, 100, 99, 100, 100, 99, 100, 100, 100, 100, 100] },
];

export const mockCategoryDistribution = [
  { name: 'Fashion', value: 35, fill: 'hsl(263, 70%, 50%)' },
  { name: 'Commercial', value: 25, fill: 'hsl(187, 94%, 43%)' },
  { name: 'Fitness', value: 15, fill: 'hsl(45, 93%, 47%)' },
  { name: 'Bridal', value: 12, fill: 'hsl(340, 82%, 52%)' },
  { name: 'Editorial', value: 8, fill: 'hsl(142, 76%, 36%)' },
  { name: 'Other', value: 5, fill: 'hsl(240, 5%, 65%)' },
];

export const trustedBrands = [
  'Lakme', 'Vogue India', 'Myntra', 'Nykaa', 'Tanishq', 'FBB', 'Manyavar', 'Sabyasachi', 'Anita Dongre', 'Raw Mango', 'Good Earth', 'Forest Essentials'
];
