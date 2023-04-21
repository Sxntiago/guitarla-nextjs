import React from "react";
import Layout from "@/components/layout";
import Link from "next/link";

function ErrorPage() {
  return (
    <Layout title='Not Found Page'>
      <p className='error'>Error!! Not Found Page</p>
      <Link className='error-link' href='/'>
        Home
      </Link>
    </Layout>
  );
}

export default ErrorPage;
