import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search as SearchIcon, Filter } from "lucide-react";

const Search = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-5xl font-bold text-center mb-12">Advanced Search</h1>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search models, agencies, campaigns..."
                className="pl-10 h-12"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="editorial">Editorial</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full h-12" variant="hero">
              <Filter className="mr-2 h-4 w-4" />
              Apply Filters
            </Button>
          </div>

          <div className="mt-12 text-center text-muted-foreground">
            <p>Enter your search criteria to discover talent</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;