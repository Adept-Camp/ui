import React, { Fragment } from "react";
import { Card, Box, Flex } from "rimble-ui";

const styles = {
  background: {
    paddingTop: "1rem",
    backgroundImage: "linear-gradient(to top, #448661 0%, #74C7D7 100%)"
  },
  center: {
    textAlign: "center"
  }
};

export default ({ animalArray }) => {
  return (
    <div style={styles.background}>
      <div>
        <h1 style={{ paddingTop: "5rem", textAlign: "center" }}>
          Wildcards Animal Marketplace
        </h1>
      </div>
      <Flex
        flexWrap={"wrap"}
        justifyContent={"space-around"}
        alignItems={"stretch"}
        px={50}
      >
        {animalArray.map((Animal, key) => (
          <Box
            key={key}
            // bg="salmon"
            color="white"
            fontSize={4}
            p={3}
            width={[1, 1, 0.3]}
          >
            <Card>
              <Animal />
            </Card>
          </Box>
        ))}
      </Flex>
    </div>
  );
};
