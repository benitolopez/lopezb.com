import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import Posts from "../app/components/posts/posts";

const mockPosts = [
  { slug: "post-1", title: "Post 1", date: "2024-09-08T00:00:00Z" },
  { slug: "post-2", title: "Post 2", date: "2024-07-03T00:00:00Z" },
];

test("renders posts correctly", () => {
  render(<Posts posts={mockPosts} />);

  // Test that the first post title is correct
  const firstPostTitle = screen.getByRole("heading", {
    level: 2,
    name: "Post 1",
  });
  expect(firstPostTitle).toBeDefined();

  // Test that the second post's date is correct
  const secondPostDate = screen.getByText("July 3, 2024");
  expect(secondPostDate).toBeDefined();
});
