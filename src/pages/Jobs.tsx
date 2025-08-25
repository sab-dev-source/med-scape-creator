import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, MapPin, Briefcase, Clock, DollarSign, GraduationCap, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      posted: "2 days ago",
      description: "We are looking for a skilled software engineer to join our dynamic team...",
      requirements: ["Bachelor's degree in Computer Science", "3+ years of experience", "Proficiency in JavaScript, React"],
      benefits: ["Health insurance", "Paid time off", "Stock options"],
      education: "Bachelor's Degree",
      experience: "3+ Years",
      skills: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "Analytics Pro",
      location: "New York, NY",
      type: "Full-time",
      salary: "$130,000 - $160,000",
      posted: "5 days ago",
      description: "Seeking a data scientist to analyze large datasets and provide actionable insights...",
      requirements: ["Master's degree in Statistics or related field", "Experience with machine learning algorithms", "Proficiency in Python, R"],
      benefits: ["Health insurance", "Paid time off", "Bonus"],
      education: "Master's Degree",
      experience: "2+ Years",
      skills: ["Python", "R", "Machine Learning", "Data Analysis"],
    },
    {
      id: 3,
      title: "Marketing Manager",
      company: "Global Marketing Solutions",
      location: "London, UK",
      type: "Contract",
      salary: "$60,000 - $80,000",
      posted: "1 week ago",
      description: "Looking for a marketing manager to develop and execute marketing strategies...",
      requirements: ["Bachelor's degree in Marketing", "5+ years of experience", "Experience with digital marketing"],
      benefits: ["Competitive salary", "Flexible hours"],
      education: "Bachelor's Degree",
      experience: "5+ Years",
      skills: ["Digital Marketing", "SEO", "Social Media Marketing"],
    },
    {
      id: 4,
      title: "UX Designer",
      company: "Design First Co.",
      location: "Los Angeles, CA",
      type: "Full-time",
      salary: "$110,000 - $140,000",
      posted: "3 days ago",
      description: "We are seeking a talented UX designer to create intuitive and engaging user experiences...",
      requirements: ["Bachelor's degree in Design", "3+ years of experience", "Proficiency in Figma, Adobe XD"],
      benefits: ["Health insurance", "Paid time off", "Professional development"],
      education: "Bachelor's Degree",
      experience: "3+ Years",
      skills: ["Figma", "Adobe XD", "User Research", "Wireframing"],
    },
    {
      id: 5,
      title: "Financial Analyst",
      company: "Finance Forward Inc.",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$90,000 - $120,000",
      posted: "4 days ago",
      description: "Seeking a financial analyst to provide financial planning and analysis support...",
      requirements: ["Bachelor's degree in Finance", "2+ years of experience", "Proficiency in Excel"],
      benefits: ["Health insurance", "Paid time off", "401k"],
      education: "Bachelor's Degree",
      experience: "2+ Years",
      skills: ["Excel", "Financial Analysis", "Budgeting"],
    },
  ]);

  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    let results = jobs.filter(job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      job.location.toLowerCase().includes(locationFilter.toLowerCase())
    );

    if (jobTypeFilter) {
      results = results.filter(job => job.type === jobTypeFilter);
    }

    setFilteredJobs(results);
  }, [searchTerm, locationFilter, jobTypeFilter, jobs]);

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Discover Your Next{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dream Job
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore thousands of opportunities from top companies across all industries
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search by job title..."
              className="pl-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-3 h-6 w-6 text-muted-foreground" />
          </div>
          <div className="relative">
            <Input
              type="text"
              placeholder="Enter location..."
              className="pl-12"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            />
            <MapPin className="absolute left-4 top-3 h-6 w-6 text-muted-foreground" />
          </div>
          <div>
            <Select onValueChange={setJobTypeFilter}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select job type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Job Types</SelectItem>
                <SelectItem value="Full-time">Full-time</SelectItem>
                <SelectItem value="Part-time">Part-time</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
                <SelectItem value="Internship">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Job Listings Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">{job.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{job.company}</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{job.location}</span>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{job.type}</span>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{job.salary}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Posted {job.posted}</span>
                </div>
              </CardContent>
              <CardFooter className="px-6 py-4">
                <Button className="w-full">Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
