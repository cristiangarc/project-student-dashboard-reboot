const URL = import.meta.env.VITE_BASE_API_URL;

export function getAllStudents() {
    return fetch(`${URL}/students`).then(response => response.json());
}

export function updateStudentComment(id, student) {
    const options = {
        method: "PUT",
        body: JSON.stringify(student),
        headers: { "Content-Type": "application/json" },
      };
      return fetch(`${URL}/students/${id}`, options).then((response) => {
        return response.json();
      });
}