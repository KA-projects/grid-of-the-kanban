<template>
  <div>
    <h1>User Profile</h1>
    <div>
      <img class="user_image" :src="user.picture.large" alt="user-photo" />
      <div>
        <h4>-Personal info-</h4>
        <p>
          <strong>Name: </strong>{{ user.title }} {{ user.name.first }}
          {{ user.name.last }}
        </p>
        <p><strong>Gender: </strong>{{ user.gender }}</p>
        <p><strong>Phone: </strong>{{ user.phone }}</p>
      </div>

      <div>
        <h4>-Location-</h4>
        <p><strong>City: </strong> {{ user.location.city }}</p>
        <p><strong>Country: </strong> {{ user.location.country }}</p>
        <p>
          <strong>Timezone: </strong> {{ user.location.timezone.offset }} \
          {{ user.location.timezone.description }}
        </p>
      </div>

      <div>
        <h4>-Login information-</h4>
        <p><strong>Email: </strong> {{ user.email }}</p>
        <p><strong>Username: </strong> {{ user.login.username }}</p>
      </div>

      <div>
        <h4>-Date of Birth-</h4>
        <p>
          <strong>Date: </strong>
          {{ new Date(user.dob.date).toLocaleDateString() }}
        </p>
        <p><strong>Age: </strong> {{ user.dob.age }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    const userEmail = this.$route.params.email;
    this.user = this.$store.state.columns
      .flatMap((column) => column.users)
      .find((user) => user.email === userEmail);
  },
};
</script>
