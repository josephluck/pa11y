import { grid } from "../accessibility/grid";
import styled from "styled-components";

export default () => {
  const colors = grid([
    "#000000",
    "#111111",
    "#222222",
    "#333333",
    "#444444",
    "#555555",
    "#666666",
    "#777777",
    "#888888",
    "#999999",
    "#AAAAAA",
    "#BBBBBB",
    "#CCCCCC",
    "#DDDDDD",
    "#EEEEEE",
    "#FFFFFF",
  ]);

  return (
    <Page>
      <Grid>
        {colors.map((row) => (
          <Row
            style={{
              gridTemplateColumns: row.map(() => "1fr").join(" "),
            }}
          >
            {row.map((cell) => (
              <Cell
                style={{
                  backgroundColor: cell.bg,
                  opacity: cell.AA ? 1 : 0,
                }}
              >
                <Dot style={{ backgroundColor: cell.fg }} />
              </Cell>
            ))}
          </Row>
        ))}
      </Grid>
    </Page>
  );
};

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Grid = styled.div`
  flex: 1;
  max-width: 100vh;
  max-height: 100vw;
`;

const Row = styled.div`
  width: 100%;
  display: grid;
  place-items: start;
`;

const Cell = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
`;

const Dot = styled.div`
  height: 20%;
  width: 20%;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
