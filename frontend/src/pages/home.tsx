import React from 'react';

const HomePage = () => {
    return (
        <>
            <div className="navbar">
                <a style={{ textDecoration: "none", color: "rgb(12, 12, 12)" }} href="/blog.html">
                    <h1><img src="/blog-brand.webp" alt="Blog Logo" /> Zvídavý občan</h1>
                </a>
                <h2>Projekty, projekty a zase projekty...</h2>
            </div>

            <div className="main">
                <div className="articles">
                    <a style={{ textDecoration: "none", color: "rgb(12, 12, 12)" }} href="/blog/zahrada/2023-08-23-predstaveni-me-zahrady.html">
                        <div className="article">
                            <div className="article-image"><img src="/blog/zahrada/2023-08-23-predstaveni-me-zahrady/zahrada.webp" alt="Article Thumbnail" /></div>
                            <div className="article-content">
                                <div className="article-title">Zahrada #1 - Představení Mé Zahrady</div>
                                <div className="article-description">
                                    {/* Article content */}
                                </div>
                                <div className="article-footer">
                                    <div className="date">23. 8. 2023</div>
                                    <div className="rubric">Zahrada</div>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* The second article goes here */}
                </div>
                <div className="sidebar">
                    <div className="rubrics">
                        <h2>Rubriky</h2>
                        <hr />
                        <div>
                            <a href="/blog.html">Vše</a>
                            <a href="/blog/obecne/index.html">Obecné</a>
                            <a href="/blog/zahrada/index.html">Zahrada</a>
                        </div>
                    </div>
                    <div className="author">
                        <h2>Jan Kubát</h2>
                        <p>
                            {/* Author description */}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
