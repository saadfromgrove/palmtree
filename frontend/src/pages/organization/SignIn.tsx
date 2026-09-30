import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
// import { toast } from "@/components/ui/toast";
import { Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrganizationSignIn = () => {
  const router = useNavigate();

  return (
    <div className="flex justify-center items-center w-full min-h-screen p-4">
      <Card className="w-full max-w-100 shadow-md">
        <CardHeader className="flex justify-center items-center w-full flex-col lg:gap-y-2">
          <div className="w-16 h-16 bg-blue-700 rounded-[100%] flex justify-center items-center lg:mb-2">
            <Building2 color="white" size={40} />
          </div>
          <h1 className="text-4xl font-semibold text-center text-neutral-800">
            Welcome back
          </h1>
          <h5 className="text-center text-neutral-600">
            Sign in to manage your organization.
          </h5>
        </CardHeader>
        <CardContent className="flex justify-start items-start w-full flex-col lg:gap-y-6 lg:mt-10">
          <Button
            size={"lg"}
            className="bg-blue-700 hover:bg-blue-800 w-full lg:py-6 lg:mt-4 cursor-pointer"
          >
            Login To Organization
          </Button>
        </CardContent>
        <div className="flex justify-center items-center w-full lg:px-8">
          <Separator className="w-full" />
        </div>
        <CardFooter className="flex justify-center items-center w-full text-center py-6">
          <p className="text-sm text-neutral-600">
            Don&apos;t have an organization account?
            <br />
            <span
              onClick={() => router("/organization/signup/founder")}
              className="font-medium text-blue-800 cursor-pointer"
            >
              Create an organization account
            </span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OrganizationSignIn;
