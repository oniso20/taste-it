import { renderHook, act } from "@testing-library/react-hooks";
import { useFetch } from "../hooks/useFetch";

const mockSuccessResponse = {
  data: {
    key: "value",
  },
};

const mockFetch = (response) =>
  jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(response),
    })
  );

describe("useFetch", () => {
  beforeEach(() => {
    global.fetch = mockFetch(mockSuccessResponse);
  });

  test("fetches data and updates the state (GET request)", async () => {
    const { result, waitFor } = renderHook(() =>
      useFetch("https://fakeurl.com/data", "GET")
    );

    await waitFor(() => result.current.isPending === false);

    expect(result.current.data).toEqual(mockSuccessResponse);
    expect(result.current.error).toBe(null);
  });

  test("fetches data and updates the state (POST request)", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://fakeurl.com/data", "POST")
    );

    await act(async () => {
      result.current.postData({ key: "value" });
      await waitForNextUpdate();
    });

    expect(result.current.data).toEqual(mockSuccessResponse);
    expect(result.current.error).toBe(null);
  });

  test("handles fetch error", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        statusText: "Error",
      })
    );

    const { result, waitFor } = renderHook(() =>
      useFetch("https://fakeurl.com/data", "GET")
    );

    await waitFor(() => result.current.isPending === false);

    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe("Could not fetch the data");
  });
});
