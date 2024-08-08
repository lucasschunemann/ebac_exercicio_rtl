import { render, screen, fireEvent } from "@testing-library/react";
import PostComments from "./index"; // ajuste o caminho se necessário

test("deve permitir a inserção de dois comentários", () => {
  render(<PostComments />);

  const input = screen.getByTestId("comment-input");
  const submitButton = screen.getByTestId("submit-button");

  // Inserindo o primeiro comentário
  fireEvent.change(input, { target: { value: "Primeiro comentário" } });
  fireEvent.click(submitButton);

  // Verificando se o primeiro comentário foi adicionado
  expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();

  // Inserindo o segundo comentário
  fireEvent.change(input, { target: { value: "Segundo comentário" } });
  fireEvent.click(submitButton);

  // Verificando se o segundo comentário foi adicionado
  expect(screen.getByText("Segundo comentário")).toBeInTheDocument();
});
