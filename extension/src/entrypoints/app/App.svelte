<script lang="ts">
  import { rpc } from "../../lib/rpc";

  let loading = false;
  let error = "";
  let profile: { name: string; email: string } | null = null;

  async function loadProfile() {
    loading = true;
    error = "";

    try {
      profile = await rpc.call("user.getProfile");
    } catch (e) {
      error = e instanceof Error ? e.message : "Unknown error";
    } finally {
      loading = false;
    }
  }
</script>

<button on:click={loadProfile} disabled={loading}>
  {loading ? "Loading..." : "Load profile"}
</button>

{#if error}
  <p>{error}</p>
{/if}

{#if profile}
  <pre>{JSON.stringify(profile, null, 2)}</pre>
{/if}
