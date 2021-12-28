import React from "react";
import { Delete } from "@mui/icons-material";

import { votingType } from "types";

import { ActionBar } from "components/03-organisms";
import { VotingTable, VotingForm } from "components/templates";
import Page from "../page";

const rows = [
  {
    id: 1,
    name: "Votacion 1",
    desc: "Jon",
    start_date: "11/11/2011",
    end_date: "11/11/2011",
  },
  {
    id: 2,
    name: "Votacion 2",
    desc: "Cersei",
    start_date: "11/11/2011",
    end_date: "11/11/2011",
  },
  {
    id: 3,
    name: "Votacion 3",
    desc: "Jaime",
    start_date: "11/11/2011",
    end_date: "11/11/2011",
  },
  {
    id: 4,
    name: "Votacion 4",
    desc: "Arya",
    start_date: "11/11/2011",
    end_date: "11/11/2011",
  },
  {
    id: 5,
    name: "Votacion 5",
    desc: "Daenerys",
    start_date: "11/11/2011",
    end_date: "11/11/2011",
  },
  {
    id: 6,
    name: "Votacion 6",
    desc: "Saliba",
    start_date: "11/11/2011",
    end_date: "11/11/2011",
  },
  {
    id: 7,
    name: "Votacion 7",
    desc: "Ferrara",
    start_date: "11/11/2011",
    end_date: "11/11/2011",
  },
  {
    id: 8,
    name: "Votacion 8",
    desc: "Rossini",
    start_date: "11/11/2011",
    end_date: "11/11/2011",
  },
  {
    id: 9,
    name: "Votacion 9",
    desc: "Harvey",
    start_date: "11/11/2011",
    end_date: "11/11/2011",
  },
];

const VotingsPage = () => {
  //const [users, setVotings] = React.useState<votingType.Voting[]>([]);
  const [votings, setVotings] = React.useState(rows);

  const [selected, setSelected] = React.useState([]);
  const [refetch, setRefetch] = React.useState(false);

  const refetchVotings = () => {
    setRefetch(!refetch);
  };

  React.useEffect(() => {
    //votingApi
    //.getVotings()
    //.then((response) => {
    // console.log(response);
    //  setVotings(response.data);
    //  })
    //.catch((error) => {
    //   console.log(error);
    // });
    setVotings(rows);
  }, [refetch]);

  const idList = React.useMemo(
    () => selected.map((voting: votingType.Voting) => voting.id),
    [selected]
  );

  const handleDelete = () => {
    // votingApi.deleteVotings(idList).then((response) => {
    //   console.log(response);
    //   refetchVotings();
    // });
  };

  return (
    <>
      <Page title="Votings">
        <VotingTable votings={votings || rows} setSelected={setSelected} />
      </Page>
      <ActionBar
        selection={selected}
        actions={[
          <VotingForm
            initialVoting={selected.length === 1 ? selected[0] : undefined}
          />,
        ]}
        bulkActions={[
          {
            icon: <Delete />,
            title: "Delete",
            onClick: () => {
              console.log("delete");
              handleDelete();
            },
          },
        ]}
      />
    </>
  );
};

export default VotingsPage;
