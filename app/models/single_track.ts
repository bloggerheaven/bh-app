export interface ISingleTrackOptions {
  id?: number;
  postId?: number;
  duration: number;
}

export interface JSONSingleTrack {
  postId: number;
  duration: number;
}

export class SingleTrack {
  id: number;
  postId: number;
  duration: number;

  constructor(options?: ISingleTrackOptions) {
    this.id = options.id;
    this.postId = options.postId;
    this.duration = options.duration;
  }

  serialize(): JSONSingleTrack {
    return {
      postId: this.postId,
      duration: this.duration
    };
  }
}
