import { IBaseParams } from "@/interfaces/IBaseParams";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { NextPageContext } from "next";
import { JSX } from "react";

interface IProps {
  params: IBaseParams;
}
const HomePage: React.FC<IProps> = ({ params }): JSX.Element => {
  console.log(params);
  return (
    <Box>
      <Heading>Logan</Heading>
    </Box>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const { query } = context;
  const page = query?.page as string;
  const length = query?.length as string;

  const params: IBaseParams = {
    length: length ? Number(length) : 1,
    page: page ? Number(page) : 10,
  };

  return {
    props: {
      params,
    },
  };
}

export default HomePage;
