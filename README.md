This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev


```

Blog App

This is a blog application built with Next.js, React, and Node.js. It allows users to read, create, edit, and delete blog posts based on their user role (admin, author, and reader).

Project Structure
The project is structured as follows:

├── components
│ ├── BlogList.js
│ ├── BufferToImage.js
│ ├── Comment.js
│ ├── Delete.js
│ ├── EditBlogModal.js
│ ├── EditButton.js
│ ├── Layout.js
│ ├── Login.js
│ ├── Logout.js
│ ├── Navbar.js
│ └── SearchBar.js
│├── pages
│ ├── api
│ │ ├── delete[id].js
│ │ ├── blog.js
│ │ └── comment.js
│ │ └── createBlog.js
│ │ └── edit.js
│ ├── blog
│ │ ├── [id].js
│ │  
│ ├── createblog.js
│ │  
│ ├── index.js
│ ├── login.js
├── public
│ └── blog.json
│ └── dummy.json
│ └── favicon.ico
├── styles
│ ├── globals.css
│ ├── Home.module.css
│ ├── Layout.module.css
│ ├── Blog.module.css
│ ├── Comment.module.css
│ ├── CreateBlogPost.module.css
│ ├── EditBlogPost.module.css
│ ├── Editbutton.module.css
│ ├── Login.module.css
│ ├── Logout.module.css
│ ├── NavBar.module.css
│ └── SearchBar.module.css
├── .gitignore
├── next.config.js
├── package.json
└── README.md

Features
User roles (admin, author, and reader)
Paginated list of blog posts with titles and content
Individual post pages with full content and comments
Commenting functionality
Create post page with form for title, content, and image upload
Search functionality
Server-side rendering (SSR) for home and post pages
Basic CSS styling for a visually appealing and user-friendly experience
