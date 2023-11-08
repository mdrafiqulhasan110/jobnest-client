const BlogPage = () => {
  return (
    <div className='w-full'>
      <div
        className='hero mb-10 rounded-md '
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
      >
        <div className='hero-overlay rounded-md  bg-opacity-70'></div>
        <div className='hero-content text-center text-neutral-content py-10'>
          <div className='max-w-lg'>
            <h1 className='mb-5 text-5xl font-bold '>Blog Page</h1>
            <p className='mb-5'>Career Chronicles: Stories, Tips, and Advice for Job Seekers</p>
          </div>
        </div>
      </div>
      <section className='mb-4 bg-gray-100 p-4 rounded-md'>
        <h2 className='text-2xl font-semibold text-primary mb-4 '>What is an Access Token and Refresh Token?</h2>
        <p className='text-gray-600'>Access tokens and refresh tokens are crucial components in modern authentication systems. They work hand in hand to provide secure and efficient access to protected resources.</p>
        <br />
        <p className='text-gray-600'>
          <strong>Access Token:</strong> An access token is a short-lived token that grants access to specific resources or APIs on behalf of an authenticated user. It is usually presented as a string and includes information about the user's identity and permissions.
        </p>
        <br />
        <p className='text-gray-600'>
          <strong>Refresh Token:</strong> A refresh token is a long-lived token used to obtain new access tokens without requiring the user to re-enter their credentials. It is more secure and helps prevent frequent user logins, as it is typically valid for a longer duration.
        </p>
      </section>

      <section className='mb-4 bg-gray-100 p-4 rounded-md'>
        <h2 className='text-2xl font-semibold text-primary mb-4'>How Do Access Tokens and Refresh Tokens Work?</h2>
        <p className='text-gray-600'>Access tokens are sent with each API request to prove the user's identity and permissions. They have a relatively short lifespan, typically a few minutes to a few hours, making them less vulnerable to misuse if intercepted.</p>
        <br />
        <p className='text-gray-600'>Refresh tokens are securely stored on the client-side, often in cookies or local storage, and are used to obtain new access tokens. When an access token expires, the client sends the refresh token to the authentication server, which returns a new access token without the need for user intervention.</p>
      </section>

      <section className='mb-4 bg-gray-100 p-4 rounded-md'>
        <h2 className='text-2xl font-semibold text-primary mb-4'>What is Express.js?</h2>
        <p className='text-gray-600'>Express.js is a popular and minimalistic web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a range of essential features and middleware.</p>
        <br />
        <p className='text-gray-600'>Express.js is known for its speed and flexibility, making it an excellent choice for developing both small-scale projects and large, complex applications. It enables routing, middleware management, and request handling with ease.</p>
      </section>

      <section className='mb-4 bg-gray-100 p-4 rounded-md'>
        <h2 className='text-2xl font-semibold text-primary mb-4'>What is Nest.js?</h2>
        <p className='text-gray-600'>Nest.js is a powerful and scalable Node.js framework for building server-side applications, particularly for creating robust and maintainable enterprise-grade applications. It is built on top of Express.js and leverages TypeScript to bring structure and modularity to your code.</p>
        <br />
        <p className='text-gray-600'>Nest.js provides features like dependency injection, decorators, and a modular structure that makes it easier to organize and test your code. It's well-suited for building RESTful APIs, real-time applications, and microservices.</p>
      </section>
    </div>
  );
};

export default BlogPage;
