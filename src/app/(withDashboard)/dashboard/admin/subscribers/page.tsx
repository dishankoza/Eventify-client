import ManageSubscribers from "@/components/ui/Dashboard/Admin/Subscribers/ManageSubscribers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Subscribers - Eventify",
  description: "Manage Subscribers",
};

const ManageSubscribersPage = () => {
  return (
    <>
      <ManageSubscribers />
    </>
  );
};

export default ManageSubscribersPage;
