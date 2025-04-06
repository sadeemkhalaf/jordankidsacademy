import React from 'react';

const DashboardPage = () => {
    const handleCreateBlog = () => {
        // Logic to create a new blog
        console.log('Create new blog');
    };

    const blogs = [
        { id: 1, title: 'Blog 1', content: 'This is the first blog.' },
        { id: 2, title: 'Blog 2', content: 'This is the second blog.' },
    ];

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleCreateBlog}>Create New Blog</button>
            <div>
                <h2>Blogs</h2>
                {blogs.length > 0 ? (
                    <ul>
                        {blogs.map((blog) => (
                            <li key={blog.id}>
                                <h3>{blog.title}</h3>
                                <p>{blog.content}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No blogs available.</p>
                )}
            </div>
        </div>
    );
};

export default DashboardPage;