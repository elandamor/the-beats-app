feat(PlaylistTrack): Introduce data type

```
type PlaylistTrack {
  id: ID! @id
  addedAt: DateTime!
  addedBy: User!
  track: Track!
}
```
