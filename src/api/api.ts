export const fetchQuizData = async (category: string, difficulty: string) => {
    let url = `https://opentdb.com/api.php?amount=10&type=multiple`;
  
    if (category !== "any") {
      url += `&category=${category}`;
    }
    if (difficulty !== "any") {
      url += `&difficulty=${difficulty}`;
    }
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching quiz data:", error);
      throw error;
    }
  };
  