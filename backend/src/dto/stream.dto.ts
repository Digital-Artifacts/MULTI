//----------------------- GET REQUEST DTOs ----------------------------------//
//GET all streams and past live streams
export class GetUserStreamsDto {
  public username: string;
  public only_past_lives: string;
}
//----------------------- GET REQUEST DTOs END ----------------------------------//

//----------------------- POST REQUEST DTOs ----------------------------------//
// Livepeer "create stream" request structure
export class LivepeerCreateStreamDto {
  public userId: string;
  public name: string;
  public creatorId: string;
  public playbackPolicy: {
    type: string;
    webhookId: string;
    webhookContext: string;
  };
  public multistream: {
    targets: [
      {
        name: string;
      },
    ];
  };
}

// MULTI "create stream" request structure
export class CreateStreamDto {
  public stream_name: string;
  public type: string;
  public webhookId: string;
  public webhookContext: string;
  public record: boolean;
  public multistream: {
    targets: [
      {
        id: string;
        profile: string;
        videoOnly: boolean;
        spec: {
          name: string;
          url: string;
        };
      },
    ];
  };
}

// Livepeer "create multistream target" request structure
export class LivepeerCreateStreamTargetDto {
  public name: string;
  public url: string;
  public diabled: boolean;
}

// MULTI "create multistream target request" structure
export class CreateStreamTargetDto {
  public userId: string;
  public name: string;
  public url: string;
}

//----------------------- POST REQUEST DTOs END ----------------------------------//

//----------------------- PATCH REQUEST DTOs ----------------------------------//
// Update "lastSeen" field in stream
export class PatchStreamDto {
  public streamId: string;
  public lastSeen: string;
}
//----------------------- PATCH REQUEST DTOs END ----------------------------------//
