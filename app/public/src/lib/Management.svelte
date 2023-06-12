<script>
  import { onMount } from "svelte";
  import svc from "../service.js";

  let searchTerm = "";
  let modalCloseButton;
  let openDialogButton;
  let users = [];
  let cuMode = "c";

  console.log(import.meta.env.VITE_API_HOST);

  let newUser = {
    id: 0,
    userName: "",
    role: "",
    city: ""
  };

  onMount(() => {
    getAll();
  });

  const searchUser = async () => {
    if(!searchTerm) {
      getAll();
      return;
    }
    let data = await svc.getUsersByRole(searchTerm);
    console.log(data);
    users = data;
  }

  const getAll = async () => {
    let data = await svc.getAllUsers();
    console.log(data);
    users = data;
  }

  const createOrUpdateUser = async () => {
    if(!newUser.userName || !newUser.role || !newUser.city) {
      alert("Provide mandatory values");
      return;
    }

    if(cuMode === 'c') {
      let data = await svc.createUser(newUser.role, newUser.userName, newUser.city);
      await getAll();
      modalCloseButton.click();
      console.log(data);

      newUser.id = 0;
      newUser.role = "";
      newUser.userName = "";
      newUser.city = "";
    } else if(cuMode === 'u') {
      let data = await svc.updateUser({
        userName: newUser.userName, 
        empId: newUser.id, 
        role: newUser.role, 
        city: newUser.city
      });
      console.log(data);

      await getAll();
      modalCloseButton.click();

      cuMode = 'c';
      newUser.id = 0;
      newUser.role = "";
      newUser.userName = "";
      newUser.city = "";
    }
  }

  const updateExistingUser = async (user) => {
    cuMode = 'u';
    
    newUser.id = user.empId;
    newUser.role = user.role;
    newUser.userName = user.userName;
    newUser.city = user.city;
    openDialogButton.click();
  }

  const deleteExistingUser = async (empId) => {
    let data = await svc.deleteUser(empId);
    console.log(data);
    await getAll();
  }
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand">User Management System ({users.length})</span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search by role" aria-label="Search" bind:value={searchTerm} on:submit={searchUser}>
        <button class="btn btn-outline-success" type="submit" on:click={searchUser}>Search</button>
      </form>
      <button type="button" class="btn btn-success ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal" bind:this={openDialogButton}>Create</button>
    </div>
  </div>
</nav>

<table class="table table-hover">
  <thead>
    <tr class="bg-dark text-light">
      <th>Emp. Id</th>
      <th>Name</th>
      <th>Role</th>
      <th>City</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {#each users as user}
      <tr>
        <td>{user.empId}</td>
        <td>{user.userName}</td>
        <td>{user.role}</td>
        <td>{user.city ? user.city : ""}</td>
        <td width="20%">
          <button class="btn btn-warning" on:click={() => updateExistingUser(user)}>Update</button>
          <button class="btn btn-danger" on:click={() => deleteExistingUser(user.empId)}>Delete</button>
        </td>
      </tr>
    {:else}
      <tr>
        <td colspan="4" class="text-center">No user found</td>
      </tr>
    {/each}
  </tbody>
</table>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">{cuMode == 'c' ? "New user" : `Update user (Emp Id - ${newUser.id})`}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">User name</label>
            <input type="text" class="form-control" id="recipient-name" bind:value={newUser.userName}>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Role</label>
            <select class="form-select" aria-label="Default select example" bind:value={newUser.role}>
              <option value="employee">Employee</option>
              <option value="manager">Manager</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">City</label>
            <input type="text" class="form-control" id="recipient-name" bind:value={newUser.city}>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" bind:this={modalCloseButton}>Close</button>
        <button type="button" class="btn btn-primary" on:click={createOrUpdateUser}>Submit</button>
      </div>
    </div>
  </div>
</div>