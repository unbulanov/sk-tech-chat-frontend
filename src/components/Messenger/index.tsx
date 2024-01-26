import React from "react";

import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import {
  Box,
  Button,
  Container,
  Input,
  Paper,
  Typography,
} from "@mui/material";

import { useChat } from "hooks/useChat";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { mainActions } from "../../actions";
import { AppState } from "../../reducers";
import {
  getMainMessagesList,
  getMainUsername,
} from "../../selectors/mainSelector";
import { MessagesList } from "../../types";


export interface Props {
  username: string;
  messages: MessagesList;

  getMessagesList: Function;
  sendMessage: Function;
}

const mapStateToProps = (state: AppState) => ({
  messages: getMainMessagesList(state),
  username: getMainUsername(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getMessagesList: () => dispatch(mainActions.mainMessagesListFetch()),
  sendMessage: (messageText: string) =>
    dispatch(mainActions.mainSendMessage(messageText)),
});

const Home = (props: Props) => {
  const { username, messages, getMessagesList, sendMessage } = props;

  const [messageText, setmessageText] = React.useState<any | null>("");

  const [currentUsername, setCurrentUsername] = React.useState("");

  const lastMessageRef = React.useRef<HTMLDivElement>(null);

  const { chats, log, chatActions } = useChat();

  React.useEffect(() => {
    lastMessageRef.current?.scrollIntoView();
  }, [messageText]);

  // const messageListener = (message: string) => {
  //   setmessageText([...messageText, message])
  // }

  React.useEffect(() => {
    getMessagesList();
  }, []);

  return (
    <Container
      maxWidth={false}
      sx={{
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        m: "'auto'",
        minWidth: "320px",
        maxWidth: "600px",
        maxHeigh: "100vh",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Paper
        sx={{
          p: "14px",
          m: 0,
          width: "100%",
          height: "100%",
          overflow: "auto",
          boxSizing: "border-box",
          background: "#f7fafc",
        }}
      >
        {messages === null ? (
          <Typography
            component={'div'}
            sx={{
              color: "gray",
              width: "100%",
              listStyleType: "none",
              textAlign: "center",
              lineHeight: "100px",
            }}
          >
            Загрузка...
          </Typography>
        ) : null}
        {messages !== null && !messages.length ? (
          <Typography
            component={'div'}
            sx={{
              color: "gray",
              width: "100%",
              listStyleType: "none",
              textAlign: "center",
              lineHeight: "100px",
            }}
          >
            Нет сообщений
          </Typography>
        ) : null}
        {messages !== null && messages.length
          ? messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  m: "10px 0",
                  listStyleType: "none",
                  position: "relative",
                }}
              >
                <Typography
                  component={'div'}
                  sx={{
                    background: "#e1e8f0",
                    p: "8px",
                    pr: "32px",
                    borderRadius: "4px",
                    wordBreak: "break-all",
                  }}
                >
                  <Typography
                    component={'div'}
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#4974ad",
                    }}
                  >
                    {message.sender}
                  </Typography>
                  {message.text}
                </Typography>

                <Typography
                  component={'div'}
                  sx={{
                    position: "absolute",
                    right: "4px",
                    bottom: "2px",
                    fontSize: "12px",
                    color: "#7b98ba",
                  }}
                >
                  {message.time}
                </Typography>
              </Box>
            ))
          : null}
        <Box ref={lastMessageRef}></Box>
      </Paper>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          background: "#bfcdde",
          minHeight: "50px",
        }}
        component="form"
      >
        <Box
          sx={{
            p: "0 8px",
            borderRight: "1px solid gray",
          }}
        >
          <Typography
            component={'div'}
            sx={{
              fontSize: "12px",
              color: "gray",
            }}
          >
            Ваше имя:
          </Typography>
          <Input
            name="username"
            value={currentUsername}
            sx={{
              border: "none",
              background: "none",
              width: "fit-content",
            }}
            size="small"
            disableUnderline
            onChange={(event) => {
              setCurrentUsername(event.target.value);
            }}
          />
        </Box>
        <Input
          sx={{
            width: "100%",
            border: "none",
            background: "none",
            p: "10px",
            ":focus-visible": {
              outline: "none",
            },
          }}
          value={messageText}
          onChange={(event) => {
            setmessageText(event.target.value);
          }}
          placeholder="Введите сообщение"
          disableUnderline
          autoFocus
        />
        <Button
          onClick={(event) => {
            event.preventDefault();
            if (messageText) {
              sendMessage(messageText);
              setmessageText("");
            }
          }}
          sx={{
            background: "none",
            border: "none",
          }}
        >
          <SendOutlinedIcon
            sx={{
              width: "20px",
              height: "20px",
              color: "gray",
            }}
          />
        </Button>
      </Box>
    </Container>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
