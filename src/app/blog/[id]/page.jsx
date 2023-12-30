"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

const posts = [
  {
    id: 5,
    title: 'The Art of Storytelling',
    href: '#',
    description:
      'Unlock the secrets behind captivating narratives. Discover the power of storytelling in business, marketing, and everyday communication.',
    date: 'Jan 10, 2023',
    datetime: '2023-01-10',
    category: { title: 'Writing', href: '#' },
    author: {
      name: 'Eleanor Bennett',
      role: 'Author / Speaker',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=8',
    },
  },
  {
    id: 6,
    title: 'The Science of Meditation',
    href: '#',
    description:
      'Delve into the scientific aspects of meditation. Explore its effects on mental health, stress reduction, and overall well-being.',
    date: 'Feb 28, 2023',
    datetime: '2023-02-28',
    category: { title: 'Wellness', href: '#' },
    author: {
      name: 'Daniel Richardson',
      role: 'Psychologist / Meditation Expert',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=8',
    },
  },
  {
    id: 7,
    title: 'Exploring Deep Learning',
    href: '#',
    description:
      'Dive into the world of deep learning. Understand neural networks, machine learning algorithms, and their real-world applications.',
    date: 'Apr 15, 2023',
    datetime: '2023-04-15',
    category: { title: 'Technology', href: '#' },
    author: {
      name: 'Sophia Anderson',
      role: 'AI Researcher / Data Scientist',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=8',
    },
  },
  {
    id: 8,
    title: 'Discovering Culinary Delights',
    href: '#',
    description:
      'Embark on a culinary journey. From exquisite recipes to the cultural significance of food, explore the world through its flavors.',
    date: 'Jun 20, 2023',
    datetime: '2023-06-20',
    category: { title: 'Food', href: '#' },
    author: {
      name: 'David Rodriguez',
      role: 'Chef / Food Critic',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=8',
    },
  },
];

const PostPage = () => {
  const router = useRouter();
  const postId = router.query?.postId; 
  
  if (!postId || !posts.some((p) => String(p.id) === postId)) {
    return <div className={styles.Loading}>Loading...</div>;
  }

  const post = posts.find((p) => String(p.id) === postId);

  return (
    <div className={styles.postContainer}>
      <h1 className={styles.postTitle}>{post.title}</h1>
      <p className={styles.postDescription}>{post.description}</p>
    </div>
  );
};

export default PostPage;
