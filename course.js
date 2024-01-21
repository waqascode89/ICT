function filterCourses(category) {
    const courses = document.querySelectorAll('.course');

    courses.forEach(course => {
      const courseCategory = course.getAttribute('data-category');

      if (courseCategory === category || category === 'all') {
        course.style.display = 'block';
        setTimeout(() => {
          course.style.opacity = '1';
        }, 10);
      } else {
        course.style.opacity = '0';
        setTimeout(() => {
          course.style.display = 'none';
        }, 50);
      }
    });
  }