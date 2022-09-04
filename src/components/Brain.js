import brain from "brain.js";

export default function Brain({ input, output, words }) {
  const net = new brain.NeuralNetwork();
  let trainingData = [];
  for (let i = 0; i < input.length; i++) {
    trainingData.push({ input: input[i], output: output[i] });
  }

  net.train(
    {
      trainingData,
    },
    {
      iterations: 500,
      errorThresh: 0.21,
    }
  );

  const Score = net.run(words);

  return <>{Score && Score}</>;
}
