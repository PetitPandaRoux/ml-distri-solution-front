import PocketBase from 'pocketbase'

/**
 * PocketBase client composable.
 * Ready for Phase 2+ when dynamic data fetching is needed.
 */
export const usePocketBase = () => {
  const config = useRuntimeConfig()
  const pb = new PocketBase(config.public.pocketbaseUrl)
  return pb
}
