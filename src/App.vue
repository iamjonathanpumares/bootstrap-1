<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-container>
          <b-navbar-brand href="#">NavBar</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item :to="{name: 'Home'}">Home</b-nav-item>
              <b-nav-item :to="{name: 'About'}">About</b-nav-item>
              <b-nav-item :to="{name: 'Services'}">Services</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </div>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>
