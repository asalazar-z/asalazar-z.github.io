# libft

A static C library that reimplements core `libc` functions and adds custom utilities for strings, memory and linked lists.

**Stack:** C · Make · `libft.a`
{ .md-button-row }

[:octicons-mark-github-16: View on GitHub](https://github.com/asalazar-z/libft){ .md-button .md-button--primary }

---

## Overview

Many of the functions in libft depend on each other, so everything is compiled into a single static library (`libft.a`). This handles dependencies in one place and makes the code reusable in every later 42 project.

The goal of the project was to understand what happens underneath: **memory allocation, pointers, data structures and low-level behavior in C**.

<div class="grid cards" markdown>

-   :material-code-braces: **Libc reimplementations**

    ---

    Character checks, string and memory functions, and conversions that behave like the originals.

-   :material-tools: **Custom utilities**

    ---

    String extraction, splitting, number conversion and file descriptor output.

-   :material-link-variant: **Linked lists**

    ---

    A `t_list` structure with a full set of functions to build, traverse and free lists.

</div>

## What's inside

All functions use the `ft_` prefix to avoid collisions with the standard library.

=== "Libc functions"

    Reimplementations of functions from `<ctype.h>`, `<string.h>` and `<stdlib.h>`.

    | Category | Functions |
    |---|---|
    | Character checks and conversion | `ft_isalpha`, `ft_isdigit`, `ft_isalnum`, `ft_isascii`, `ft_isprint`, `ft_toupper`, `ft_tolower` |
    | Strings | `ft_strlen`, `ft_strlcpy`, `ft_strlcat`, `ft_strchr`, `ft_strrchr`, `ft_strncmp`, `ft_strnstr` |
    | Memory | `ft_memset`, `ft_bzero`, `ft_memcpy`, `ft_memmove`, `ft_memchr`, `ft_memcmp` |
    | Conversion and allocation | `ft_atoi`, `ft_calloc`, `ft_strdup` |

=== "Additional functions"

    Utilities that are not part of the standard `libc`.

    | Function | Purpose |
    |---|---|
    | `ft_substr` | Extracts a substring from a given index |
    | `ft_strjoin` | Concatenates two strings into a newly allocated one |
    | `ft_strtrim` | Trims given characters from both ends of a string |
    | `ft_split` | Splits a string into an array using a delimiter |
    | `ft_itoa` | Converts an integer to its string representation |
    | `ft_strmapi` | Applies a function to each character to build a new string |
    | `ft_striteri` | Applies a function to each character of the original string |
    | `ft_putchar_fd`, `ft_putstr_fd`, `ft_putendl_fd`, `ft_putnbr_fd` | Write characters, strings, lines or numbers to a file descriptor |

=== "Linked lists"

    A suite of functions built around the `t_list` structure.

    | Function | Purpose |
    |---|---|
    | `ft_lstnew` | Creates a new node with the given content |
    | `ft_lstadd_front` / `ft_lstadd_back` | Adds a node at the start or end of the list |
    | `ft_lstsize` | Counts the nodes in the list |
    | `ft_lstlast` | Returns the last node |
    | `ft_lstdelone` / `ft_lstclear` | Deletes one node or the whole list, freeing content through a function pointer |
    | `ft_lstiter` | Applies a function to the content of every node |
    | `ft_lstmap` | Builds a new list by transforming each node, with safe handling of allocation failures |

## Key learnings

!!! note "Technical takeaways"
    - **Memory management:** allocating with `malloc`/`calloc` and freeing correctly, including cleanup when an allocation fails halfway (for example in `ft_split` and `ft_lstmap`).
    - **Overlapping memory:** why `ft_memmove` must behave differently from `ft_memcpy`.
    - **Function pointers:** passing behavior as an argument in `ft_lstiter`, `ft_lstclear` and `ft_strmapi`.
    - **Edge cases:** checking each function against the official documentation and `man` pages, including empty strings, `NULL` values and size limits.
    - **Build tooling:** a Makefile following 42 rules, compiling with `cc -Wall -Wextra -Werror`.

## Build and use

```bash
git clone git@github.com:asalazar-z/libft.git
cd libft
make          # builds libft.a
```

To use it in another project:

```c
#include "libft.h"
```

```bash
cc file.c libft.a -o program
```

| Command | Effect |
|---|---|
| `make` | Builds `libft.a` |
| `make clean` | Removes object files |
| `make fclean` | Removes object files and `libft.a` |
| `make re` | Rebuilds everything from scratch |
