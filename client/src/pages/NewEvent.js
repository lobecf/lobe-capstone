import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";

function NewEvent({ user }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        location,
        start_time: startTime,
        end_time: endTime,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        navigate.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      <Wrapper>
        <WrapperChild>
          <h2>Create Recipe</h2>
          <form onSubmit={handleSubmit}>
            <FormField>
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormField>
            <FormField>
              <Label htmlFor="description">Desciption</Label>
              <Input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormField>
            <FormField>
              <Label htmlFor="location">Location</Label>
              <Textarea
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </FormField>
            <FormField>
              <Label htmlFor="start-time">Start Time</Label>
              <Textarea
                type="text"
                id="location"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </FormField>
            <FormField>
              <Label htmlFor="end-time">End Time</Label>
              <Textarea
                type="text"
                id="location"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </FormField>
            <FormField>
              <Button color="primary" type="submit">
                {isLoading ? "Loading..." : "Submit Recipe"}
              </Button>
            </FormField>
            <FormField>
              {errors.map((err) => (
                <Error key={err}>{err}</Error>
              ))}
            </FormField>
          </form>
        </WrapperChild>
        <WrapperChild>
          <h1>{title}</h1>
          <p>
            <cite>By {user.username}</cite>
          </p>
          <ReactMarkdown>{description}</ReactMarkdown>
        </WrapperChild>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewEvent;
